#!/usr/bin/env node
/* Generate a VAPID keypair for Web Push.
 * Run once. Paste the outputs into Cloudflare secrets:
 *   wrangler secret put VAPID_PUBLIC_KEY      ← paste publicKey (base64url, 65 bytes uncompressed)
 *   wrangler secret put VAPID_PRIVATE_KEY     ← paste privateKeyJwk (JSON string)
 *
 * Also paste the publicKey into the WORKER_BASE constant in index.html
 * (or have the page fetch /vapid-public-key from the Worker at runtime — it does this by default).
 */

import { webcrypto } from 'node:crypto';

const keyPair = await webcrypto.subtle.generateKey(
  { name: 'ECDSA', namedCurve: 'P-256' },
  true,
  ['sign', 'verify']
);

const publicRaw = new Uint8Array(await webcrypto.subtle.exportKey('raw', keyPair.publicKey));
const privateJwk = await webcrypto.subtle.exportKey('jwk', keyPair.privateKey);

function b64u(bytes) {
  return Buffer.from(bytes).toString('base64')
    .replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

console.log('\n=== VAPID keypair generated ===\n');
console.log('VAPID_PUBLIC_KEY (paste as Worker secret + use as applicationServerKey on the client):');
console.log(b64u(publicRaw));
console.log('\nVAPID_PRIVATE_KEY (paste as Worker secret — single line JSON):');
console.log(JSON.stringify(privateJwk));
console.log('\nKeep the private key secret. The public key is safe to commit / serve.\n');
