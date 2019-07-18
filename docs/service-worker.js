self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/dn1ynTsNGg3ogTjc2bO8d/pages/_app.js",
    "revision": "69fdb7bf6b1324f6c9d1"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/dn1ynTsNGg3ogTjc2bO8d/pages/_error.js",
    "revision": "3e999bf6d93df1fd222b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/dn1ynTsNGg3ogTjc2bO8d/pages/about.js",
    "revision": "65cf4abda1caf12bb6a7"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/dn1ynTsNGg3ogTjc2bO8d/pages/amp-install-service-worker.js",
    "revision": "76083c450ac329d42ad6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/dn1ynTsNGg3ogTjc2bO8d/pages/count.js",
    "revision": "e5a6a190dd3aad760ffc"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/dn1ynTsNGg3ogTjc2bO8d/pages/stats.js",
    "revision": "751e1adc676bee68750d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-5856a6fa252953fc3e00.js",
    "revision": "8aea4166013567da6174"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-02abf031fc7e13766d3d.js",
    "revision": "fba09cad31602b08916f"
  }
];

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
workbox.navigationPreload.enable();

self.addEventListener('install', event => {
  const urls = [
    'https://cdn.ampproject.org/v0.js',
    'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js',
    'https://cdn.ampproject.org/shadow-v0.js'
  ];
  const cacheName = workbox.core.cacheNames.runtime;
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)));
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName": "offlineCache", "networkTimeoutSeconds": 15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [0, 200] })] }), 'GET');
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.NetworkFirst({ "cacheName": "offlineCache", "networkTimeoutSeconds": 15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [0, 200] })] }), 'GET');

