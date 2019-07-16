self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/AMlyPOj8xoeT4HPGnHL3E/pages/_app.js",
    "revision": "1c25dbeae36a0f9b74df"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/AMlyPOj8xoeT4HPGnHL3E/pages/_error.js",
    "revision": "f8661bfa4767572dc992"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/AMlyPOj8xoeT4HPGnHL3E/pages/about.js",
    "revision": "1ea4edc8d04599372f3b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/AMlyPOj8xoeT4HPGnHL3E/pages/amp.js",
    "revision": "6ce72b903fa154ea8161"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/AMlyPOj8xoeT4HPGnHL3E/pages/index.js",
    "revision": "97caaa01935d26d43a20"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/AMlyPOj8xoeT4HPGnHL3E/pages/stats.js",
    "revision": "28d437692c8db7d09bd2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.911954de4310733a2061.js",
    "revision": "c00c9feac2f80e319333"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-949701e360204637477f.js",
    "revision": "c32be239edd763c00f9a"
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
