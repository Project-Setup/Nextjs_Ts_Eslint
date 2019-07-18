self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/MbPH6PmLuF7Muu32SThdR/pages/_app.js",
    "revision": "9453db079c5012e8a85f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/MbPH6PmLuF7Muu32SThdR/pages/_error.js",
    "revision": "4c832c27353cde6dfeb1"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/MbPH6PmLuF7Muu32SThdR/pages/about.js",
    "revision": "419e36a5217972d77413"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/MbPH6PmLuF7Muu32SThdR/pages/amp-install-serviceworker-script.js",
    "revision": "5c36b8439d022e97256e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/MbPH6PmLuF7Muu32SThdR/pages/count.js",
    "revision": "774432a90a8e8a970b8c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/MbPH6PmLuF7Muu32SThdR/pages/stats.js",
    "revision": "aac1b3af1e7746fa3ea2"
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
