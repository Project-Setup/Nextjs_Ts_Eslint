self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/_app.js",
    "revision": "8b86f9cf8649a6fba1f3"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/_error.js",
    "revision": "293d1dc77df6366ca75f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/about.js",
    "revision": "eb63e3c7b0da19c0efd8"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/amp-install-service-worker.js",
    "revision": "d26503b18f69eb9d4d69"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/count.js",
    "revision": "d824df8948d526b322ab"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/index.js",
    "revision": "a9f9efef1172430671e4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/W1sA4XejLrAv1DAcxEj0W/pages/stats.js",
    "revision": "00250ede6e3584eac1b7"
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

