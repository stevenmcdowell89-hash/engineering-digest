/* Engineering Digest — unified Worker for the Cloudflare Workers
 * Static Assets deployment. Handles the /api/* push notification
 * endpoints and falls through to the static asset binding for
 * everything else (the index page, issues, manifest, sw.js, icons).
 *
 * Required bindings (wrangler.toml + dashboard):
 *   ASSETS         — static assets binding (config in wrangler.toml)
 *   SUBSCRIPTIONS  — KV namespace storing push subscriptions
 *
 * Required encrypted secrets (Settings → Variables and Secrets):
 *   VAPID_PUBLIC_KEY    base64url, 65-byte uncompressed P-256
 *   VAPID_PRIVATE_KEY   JWK string {"crv":"P-256","d":"...","kty":"EC","x":"...","y":"..."}
 *   VAPID_SUBJECT       "mailto:you@example.com"
 *   NOTIFY_TOKEN        random string shared with the GitHub Action
 *
 * Endpoints:
 *   GET  /api/vapid-public-key   returns the VAPID public key for the client
 *   POST /api/subscribe          stores a push subscription
 *   POST /api/unsubscribe        removes a push subscription
 *   POST /api/notify             bearer-auth; pushes to every stored subscription
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route /api/* to the handlers; everything else is a static asset
    if (url.pathname.startsWith('/api/')) {
      return handleApi(request, url, env, ctx);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleApi(request, url, env, ctx) {
  try {
    if (request.method === 'GET' && url.pathname === '/api/vapid-public-key') {
      return json({ key: env.VAPID_PUBLIC_KEY });
    }
    if (request.method === 'POST' && url.pathname === '/api/subscribe') {
      return await handleSubscribe(request, env);
    }
    if (request.method === 'POST' && url.pathname === '/api/unsubscribe') {
      return await handleUnsubscribe(request, env);
    }
    if (request.method === 'POST' && url.pathname === '/api/notify') {
      return await handleNotify(request, env);
    }
    if (request.method === 'POST' && url.pathname === '/api/track') {
      return await handleTrack(request, env);
    }
    if (request.method === 'GET' && url.pathname === '/api/stats') {
      return await handleStats(request, url, env);
    }
    return new Response('Not found', { status: 404 });
  } catch (err) {
    return new Response(`Worker error: ${err.message}`, { status: 500 });
  }
}

// ─── handlers ────────────────────────────────────────────────────────────────

async function handleSubscribe(request, env) {
  const sub = await request.json();
  if (!sub || !sub.endpoint || !sub.keys || !sub.keys.p256dh || !sub.keys.auth) {
    return new Response('Invalid subscription', { status: 400 });
  }
  const id = await sha256Hex(sub.endpoint);
  await env.SUBSCRIPTIONS.put(id, JSON.stringify({
    endpoint: sub.endpoint,
    keys: sub.keys,
    createdAt: new Date().toISOString(),
  }));
  return json({ ok: true });
}

async function handleUnsubscribe(request, env) {
  const sub = await request.json();
  if (!sub || !sub.endpoint) return new Response('Invalid', { status: 400 });
  const id = await sha256Hex(sub.endpoint);
  await env.SUBSCRIPTIONS.delete(id);
  return json({ ok: true });
}

async function handleNotify(request, env) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  if (!env.NOTIFY_TOKEN || token !== env.NOTIFY_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }
  const body = await request.json();
  const payload = {
    title: body.title || 'Engineering Digest',
    body: body.body || 'A new issue is out.',
    url: body.url || '/',
  };

  const list = await env.SUBSCRIPTIONS.list();
  const results = [];

  for (const k of list.keys) {
    // Skip page-open tracking entries written by /api/track — they share this
    // KV namespace with subscriptions and would otherwise be parsed as push targets.
    if (k.name.startsWith('count:')) continue;
    const raw = await env.SUBSCRIPTIONS.get(k.name);
    if (!raw) continue;
    const sub = JSON.parse(raw);
    try {
      const status = await sendPush(sub, payload, env);
      if (status === 404 || status === 410) {
        await env.SUBSCRIPTIONS.delete(k.name);
        results.push({ endpoint: short(sub.endpoint), status, dropped: true });
      } else {
        results.push({ endpoint: short(sub.endpoint), status });
      }
    } catch (err) {
      results.push({ endpoint: short(sub.endpoint), error: err.message });
    }
  }

  return json({ sent: results.length, results });
}

// ─── open tracking + stats (editor-only) ─────────────────────────────────────

// Track a page-open event for an issue. Anonymous — only the count is stored.
// Key shape: count:<issueId>. Subscriber keys are sha256 hex so prefixes don't
// collide. Dedup is client-side (sessionStorage); we don't dedup server-side
// to keep this writeable without a read+write round-trip.
async function handleTrack(request, env) {
  let body;
  try { body = await request.json(); } catch (_) { return new Response('bad', { status: 400 }); }
  const id = body && body.issueId;
  if (!id || typeof id !== 'string' || !/^[a-z0-9.\-_]+$/i.test(id) || id.length > 64) {
    return new Response('bad', { status: 400 });
  }
  const key = `count:${id}`;
  const current = parseInt((await env.SUBSCRIPTIONS.get(key)) || '0', 10);
  await env.SUBSCRIPTIONS.put(key, String(current + 1));
  return json({ ok: true });
}

// Editor-only stats. Auth via Bearer header OR ?token= query param.
// Returns: subscriber count by push-service vendor, plus open counts per issue.
async function handleStats(request, url, env) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : url.searchParams.get('token');
  if (!env.NOTIFY_TOKEN || token !== env.NOTIFY_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  const list = await env.SUBSCRIPTIONS.list();
  let subscribers = 0;
  const providers = { google: 0, mozilla: 0, apple: 0, windows: 0, other: 0 };
  const opens = {};
  let totalOpens = 0;

  for (const k of list.keys) {
    const raw = await env.SUBSCRIPTIONS.get(k.name);
    if (raw === null) continue;

    if (k.name.startsWith('count:')) {
      const issueId = k.name.slice(6);
      const n = parseInt(raw, 10) || 0;
      opens[issueId] = n;
      totalOpens += n;
      continue;
    }

    // Otherwise it's a subscription record
    try {
      const sub = JSON.parse(raw);
      const ep = sub.endpoint || '';
      subscribers++;
      if (ep.includes('fcm.googleapis.com')) providers.google++;
      else if (ep.includes('mozilla.com')) providers.mozilla++;
      else if (ep.includes('apple.com')) providers.apple++;
      else if (ep.includes('windows.com') || ep.includes('notify.windows.com')) providers.windows++;
      else providers.other++;
    } catch (_) {}
  }

  return json({ subscribers, providers, totalOpens, opens });
}

// ─── Web Push (RFC 8030, 8188, 8291, 8292) ───────────────────────────────────

async function sendPush(subscription, payload, env) {
  const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));
  const body = await encryptPayload(payloadBytes, subscription.keys.p256dh, subscription.keys.auth);

  const endpointUrl = new URL(subscription.endpoint);
  const audience = `${endpointUrl.protocol}//${endpointUrl.host}`;
  const jwt = await vapidJwt(env.VAPID_PRIVATE_KEY, env.VAPID_SUBJECT, audience);

  const res = await fetch(subscription.endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `vapid t=${jwt}, k=${env.VAPID_PUBLIC_KEY}`,
      'Content-Encoding': 'aes128gcm',
      'Content-Type': 'application/octet-stream',
      'Content-Length': String(body.byteLength),
      'TTL': '86400',
      'Urgency': 'normal',
    },
    body,
  });
  return res.status;
}

async function vapidJwt(privateKeyJwkStr, subject, audience) {
  const header = { typ: 'JWT', alg: 'ES256' };
  const claims = {
    aud: audience,
    exp: Math.floor(Date.now() / 1000) + 12 * 3600,
    sub: subject,
  };
  const unsigned = `${b64uJson(header)}.${b64uJson(claims)}`;
  const jwk = JSON.parse(privateKeyJwkStr);
  const key = await crypto.subtle.importKey(
    'jwk',
    jwk,
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    key,
    new TextEncoder().encode(unsigned)
  );
  return `${unsigned}.${b64u(new Uint8Array(sig))}`;
}

async function encryptPayload(plaintext, p256dhB64u, authB64u) {
  const uaPublicRaw = b64uDecode(p256dhB64u);
  const authSecret = b64uDecode(authB64u);

  const asKeyPair = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveBits']
  );
  const asPublicRaw = new Uint8Array(await crypto.subtle.exportKey('raw', asKeyPair.publicKey));

  const uaPublicKey = await crypto.subtle.importKey(
    'raw', uaPublicRaw,
    { name: 'ECDH', namedCurve: 'P-256' },
    false, []
  );

  const ecdhSecret = new Uint8Array(
    await crypto.subtle.deriveBits({ name: 'ECDH', public: uaPublicKey }, asKeyPair.privateKey, 256)
  );

  const keyInfo = concat(
    new TextEncoder().encode('WebPush: info\0'),
    uaPublicRaw,
    asPublicRaw
  );
  const ikm = await hkdf(authSecret, ecdhSecret, keyInfo, 32);

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, new TextEncoder().encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, ikm, new TextEncoder().encode('Content-Encoding: nonce\0'), 12);

  const padded = new Uint8Array(plaintext.length + 1);
  padded.set(plaintext);
  padded[plaintext.length] = 0x02;

  const aesKey = await crypto.subtle.importKey('raw', cek, { name: 'AES-GCM' }, false, ['encrypt']);
  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, aesKey, padded)
  );

  const rs = new Uint8Array(4);
  new DataView(rs.buffer).setUint32(0, 4096, false);
  return concat(salt, rs, new Uint8Array([65]), asPublicRaw, ciphertext);
}

async function hkdf(salt, ikm, info, length) {
  const key = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'HKDF', hash: 'SHA-256', salt, info },
    key,
    length * 8
  );
  return new Uint8Array(bits);
}

// ─── utilities ───────────────────────────────────────────────────────────────

function b64u(bytes) {
  let s = btoa(String.fromCharCode(...bytes));
  return s.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function b64uJson(obj) {
  return b64u(new TextEncoder().encode(JSON.stringify(obj)));
}
function b64uDecode(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function concat(...arrays) {
  let total = 0;
  for (const a of arrays) total += a.length;
  const out = new Uint8Array(total);
  let off = 0;
  for (const a of arrays) { out.set(a, off); off += a.length; }
  return out;
}
async function sha256Hex(s) {
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function json(obj, init = {}) {
  return new Response(JSON.stringify(obj), {
    ...init,
    headers: { 'content-type': 'application/json', ...(init.headers || {}) },
  });
}
function short(endpoint) {
  return (endpoint || '').replace(/^https?:\/\//, '').slice(0, 48) + '…';
}
