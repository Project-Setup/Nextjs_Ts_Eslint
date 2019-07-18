self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.ac7da73c077b2a5146b1.js",
    "revision": "04b42b5cf5aeaf3d81b6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/_app.js",
    "revision": "13eb357ab5bc530528e4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/_error.js",
    "revision": "fbbebab1a5c2ae6dd324"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/about.js",
    "revision": "e524e9d5b2eb3b543055"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/amp-install-service-worker.js",
    "revision": "08f281699b12f062bfa0"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/count.js",
    "revision": "eacb711ed65fde9c32e7"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/index.js",
    "revision": "8c11442c9e117404636a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/pd71x3erEdUBX7QdBAKT0/pages/stats.js",
    "revision": "5d37d4eb3aa0b36fecc6"
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

