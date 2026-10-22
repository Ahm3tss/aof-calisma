const V="aof-ea76084305",CORE=["./", "davranis.html", "hukuk-temel.html", "idare.html", "iktisat.html", "index.html", "ingilizce.html", "siyasi-tarih.html", "uluslararasi-hukuk.html", "uluslararasi-politika.html", "manifest.json", "icon-192.png", "icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(h=>{const n=fetch(r).then(x=>{if(x&&(x.ok||x.type==="opaque")){const y=x.clone();caches.open(V).then(c=>c.put(r,y))}return x}).catch(()=>h);return h||n}))});
