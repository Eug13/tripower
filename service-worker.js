var CACHE_NAME = 'myAppCache';
var urlsToCache = [
  '/',
  '/BenchPress',
  '/Deadlift',
  '/Squat',
  '/favicon.ico',
  '/static/css/styles.css',
  '/static/js/main.f960a26f.js',
  '/manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});