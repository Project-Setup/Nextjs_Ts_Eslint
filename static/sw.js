
// self.addEventListener('install', event => {
//   const urls = [
//     'https://cdn.ampproject.org/v0.js',
//     'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
//     'https://cdn.ampproject.org/shadow-v0.js'
//   ];
//   const cacheName = workbox.core.cacheNames.runtime;
//   event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)));
// });

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// importScripts(

// );

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// /**
//  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
//  * requests for URLs in the manifest.
//  * See https://goo.gl/S9QRab
//  */
// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');