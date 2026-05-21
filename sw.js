/* Engineering Digest — service worker
 * Responsibilities:
 *   1. Receive push events and show notifications
 *   2. Open the issue URL when the notification is clicked
 *
 * No offline caching — the site is small and online-only is fine for now.
 */

const NOTIFICATION_TAG = 'engineering-digest-issue';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (_) {
    payload = { title: 'Engineering Digest', body: event.data ? event.data.text() : '' };
  }

  const title = payload.title || 'Engineering Digest';
  const options = {
    body: payload.body || 'A new issue is out.',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    tag: NOTIFICATION_TAG,
    renotify: true,
    data: { url: payload.url || '/' },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of all) {
      if ('focus' in client) {
        await client.navigate(target).catch(() => {});
        return client.focus();
      }
    }
    if (self.clients.openWindow) {
      return self.clients.openWindow(target);
    }
  })());
});
