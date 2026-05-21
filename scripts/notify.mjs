#!/usr/bin/env node
/* Trigger push notifications for a published issue.
 *
 * Usage:
 *   NOTIFY_TOKEN=xxx WORKER_URL=https://engineering-digest-push.<acct>.workers.dev \
 *     node scripts/notify.mjs --issue 11 \
 *       --title "Issue 11 is out" \
 *       --body "Headline summary of this week" \
 *       --url "https://example.com/issues/issue-11.html"
 *
 * Or wire into a GitHub Action that runs on push to main when issues/issue-N.html lands.
 */

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);

const workerUrl = process.env.WORKER_URL;
const token = process.env.NOTIFY_TOKEN;

if (!workerUrl || !token) {
  console.error('Missing env: set WORKER_URL and NOTIFY_TOKEN');
  process.exit(1);
}

const body = {
  title: args.title || `Issue ${args.issue || '?'} is out`,
  body: args.body || 'New Engineering Digest issue.',
  url: args.url || '/',
};

const res = await fetch(`${workerUrl}/notify`, {
  method: 'POST',
  headers: {
    'authorization': `Bearer ${token}`,
    'content-type': 'application/json',
  },
  body: JSON.stringify(body),
});

const json = await res.json();
console.log(`Status: ${res.status}`);
console.log(JSON.stringify(json, null, 2));
process.exit(res.ok ? 0 : 1);
