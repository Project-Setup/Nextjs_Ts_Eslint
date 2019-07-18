self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.4e29e4f9ff3fb78e802e.js",
    "revision": "a6b0251d3dcab7786fef"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/_app.js",
    "revision": "f66bf73d2c69ddc08f6d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/_error.js",
    "revision": "570dea3ce736ef3d871e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/about.js",
    "revision": "4678c334ee7366f72b40"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/amp-install-service-worker.js",
    "revision": "23a3f92ecd6f325a6f8f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/count.js",
    "revision": "ba3b422d258e2f482d54"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/index.js",
    "revision": "b91b60dc2c7ee85dfc3d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/irhVGr2YQVFxYrMjsKsUv/pages/stats.js",
    "revision": "2e8a91786bb00e4c515f"
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

