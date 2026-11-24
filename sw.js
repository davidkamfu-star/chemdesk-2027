const scope=self.registration.scope;
const cacheName='chemdesk-'+new URL(scope).pathname+'-v1';
const files=['./','index.html','style.css','app.js','course.js','mark.svg','molecule.svg'].map(p=>new URL(p,scope).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(files)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||!files.includes(event.request.url))return;event.respondWith(caches.open(cacheName).then(async cache=>{try{const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response}catch{return await cache.match(event.request)||Response.error()}}))});
