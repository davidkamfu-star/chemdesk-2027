const oldCache='chemdesk-'+new URL(self.registration.scope).pathname+'-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{await caches.delete(oldCache);await self.clients.claim();await self.registration.unregister()})()));
