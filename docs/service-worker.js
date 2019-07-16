self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/6ZDQHennnryvS9AQyNbTM/pages/_app.js",
    "revision": "f65f78fd10d00baaa469"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/6ZDQHennnryvS9AQyNbTM/pages/_error.js",
    "revision": "d132a8586f20f1210d7d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/6ZDQHennnryvS9AQyNbTM/pages/about.js",
    "revision": "caaa3d0975a035889d01"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/6ZDQHennnryvS9AQyNbTM/pages/amptest.js",
    "revision": "afb6a8391b8a03ce5270"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/6ZDQHennnryvS9AQyNbTM/pages/index.js",
    "revision": "672a81a88fe8cee7e0e5"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/6ZDQHennnryvS9AQyNbTM/pages/stats.js",
    "revision": "152ea3ff07f838eabed4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.911954de4310733a2061.js",
    "revision": "c00c9feac2f80e319333"
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
