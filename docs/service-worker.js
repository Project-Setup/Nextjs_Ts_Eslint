self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.17fb3cefbf0436adf927.js",
    "revision": "14d8809f7fa4406908bd"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/q2JB2i9wgsoERIjOUZlw_/pages/_app.js",
    "revision": "0aaf38e667a872252697"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/q2JB2i9wgsoERIjOUZlw_/pages/_error.js",
    "revision": "30c8163555fc286fe05d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/q2JB2i9wgsoERIjOUZlw_/pages/about.js",
    "revision": "83c07f1989b9254e1aa9"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/q2JB2i9wgsoERIjOUZlw_/pages/count.js",
    "revision": "aa35f55c2f91bee6f154"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/q2JB2i9wgsoERIjOUZlw_/pages/stats.js",
    "revision": "5c6f8a235ec31dc1a777"
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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
