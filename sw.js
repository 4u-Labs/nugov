const CACHE_NAME = 'nugov-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.php',
  './privacidade.php',
  './termos.php',
  './suporte.php',
  './assets/css/nugov.css',
  './assets/js/app.js',
  './assets/js/pwa.js',
  './data/transactions.json',
  './data/rankings.json',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request).catch(() => {});
    })
  );
});
