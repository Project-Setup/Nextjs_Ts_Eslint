self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/NKxVUWzpB6_1-qTFXAamq/pages/_app.js",
    "revision": "9f7273d6f501848e23a4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/NKxVUWzpB6_1-qTFXAamq/pages/_error.js",
    "revision": "002ab4c78a35609afb54"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/NKxVUWzpB6_1-qTFXAamq/pages/about.js",
    "revision": "10cf02549e75f90c31ca"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/NKxVUWzpB6_1-qTFXAamq/pages/amp-install-serviceworker-script.js",
    "revision": "7cd4f7e39658e0831687"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/NKxVUWzpB6_1-qTFXAamq/pages/count.js",
    "revision": "871523758e434f771a00"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/NKxVUWzpB6_1-qTFXAamq/pages/stats.js",
    "revision": "175fe1d4c583237a2c4e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-2570a7045a83e31895c5.js",
    "revision": "5d8a4c957e9acb35cfd5"
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
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.CacheFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
