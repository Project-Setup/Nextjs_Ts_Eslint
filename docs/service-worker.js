self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/_app.js",
    "revision": "478c3ea6a51e231f1ba2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/_error.js",
    "revision": "d8616c6d2d61b73bd8cd"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/about.js",
    "revision": "dccf8e8f2e30fd106d47"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/amp-install-service-worker.js",
    "revision": "9be647b6002add19d693"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/count.js",
    "revision": "496758c9350608f2f57c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/index.js",
    "revision": "55a4c4ecb185a0fb05b8"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OIwaCSSHYstehwh9Sw--G/pages/stats.js",
    "revision": "47b5b3f9c95f30cf2f81"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.4e29e4f9ff3fb78e802e.js",
    "revision": "a6b0251d3dcab7786fef"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-2d7b27a6487bffc1796a.js",
    "revision": "5ce00c2dfea573906cb6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
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

