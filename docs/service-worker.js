self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rN90egCmnlKEOMkBMqDT4/pages/_app.js",
    "revision": "2cbe92d6d22b0b359cb4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rN90egCmnlKEOMkBMqDT4/pages/_error.js",
    "revision": "bf9cf00eb5d7bc2b82e1"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rN90egCmnlKEOMkBMqDT4/pages/about.js",
    "revision": "c5bd0352008cc9957009"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rN90egCmnlKEOMkBMqDT4/pages/amp-install-service-worker.js",
    "revision": "b02434d4c7792cdfd75b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rN90egCmnlKEOMkBMqDT4/pages/count.js",
    "revision": "f006c563bfbb1ebfe77b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rN90egCmnlKEOMkBMqDT4/pages/stats.js",
    "revision": "35379287b0a4816a6fb2"
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

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

workbox.navigationPreload.enable();

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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
