self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./index.html","./css/style.css","./js/script.js","./images/logo/","./src/master.css"],);
        })
    )
});

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})