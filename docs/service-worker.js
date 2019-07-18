self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/_app.js",
    "revision": "db2c5846b9ad86a6546c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/_error.js",
    "revision": "ce670afc44cc0574b738"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/about.js",
    "revision": "f5d142bd7bcf9d6ef658"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/amp-install-service-worker.js",
    "revision": "2f80fd64247333dc6dd3"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/count.js",
    "revision": "b53fc49d1943337c188f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/index.js",
    "revision": "87c72fb1d6cf639fa7ac"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8vw_zS4U0YWovlt0kc9ao/pages/stats.js",
    "revision": "b4014c9a8b9b9c7dc414"
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

