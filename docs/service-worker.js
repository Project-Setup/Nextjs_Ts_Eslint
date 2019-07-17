self.__precacheManifest = [
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
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/zObRb9y4yNqsqua2b5gPT/pages/_app.js",
    "revision": "c2b5dee5ddfbe9f59927"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/zObRb9y4yNqsqua2b5gPT/pages/_error.js",
    "revision": "a7a38b5c8ab2fa0d513e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/zObRb9y4yNqsqua2b5gPT/pages/about.js",
    "revision": "48d97a495349ef72ca24"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/zObRb9y4yNqsqua2b5gPT/pages/index.js",
    "revision": "e23c40e3a3845c1990f2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/zObRb9y4yNqsqua2b5gPT/pages/stats.js",
    "revision": "a2daeef2d07d3d8d9568"
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
