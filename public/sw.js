const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v2';
const assets = [
    '/',
    '/fallback',
    'javascript/index.js',
    'css/index.css',
    '/icons/apple-icon-180.png',
    '/icons/manifest-icon-192.maskable.png',
    '/icons/manifest-icon-512.maskable.png'
];


//install service worker
self.addEventListener('install', e =>{
    //console.log('Service worker is installed');

    e.waitUntil(caches.open(staticCacheName)
        .then(cache =>{
            console.log('Caching shell assets');
            cache.addAll(assets)
        })
    )
})

//activate service worker
self.addEventListener('activate', e =>{
    console.log('Service worker is activated');
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key)))
        })
    )
})

//fetch event
self.addEventListener('fetch', e =>{
    console.log('Service worker is fetched', e);
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request).then(fetchRes => {
                    return caches.open(dynamicCacheName).then(cache => {
                            cache.put(e.request.url, fetchRes.clone());
                            return fetchRes;
                        })
                });
        }).catch(() => caches.match('/fallback'))
    );
}); 