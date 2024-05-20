const STATIC_CACHE_NAME = 's-app-v1'
const DYNAMIC_CACHE_NAME = 'd-app-v1'

const ASSETS_URLS = [
  'index.html',
  'favicon.ico',
  '/static/js/bundle.js',
  '/',
  '/catalog',
  '/brands',
  '/about',
  '/contact',
]

self.addEventListener('install', async () => {
  console.log('[SW]: install')
  const cache = await caches.open(STATIC_CACHE_NAME)
  await cache.addAll(ASSETS_URLS)
})


self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res) {
          return res
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    )
  }
})
