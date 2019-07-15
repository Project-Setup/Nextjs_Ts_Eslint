self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.014479454e312f1da137.js",
    "revision": "4616332d4c519bf37a4e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/mYLQmezYdbg8e6d2P8Iwn/pages/_app.js",
    "revision": "92dc3cc80155b2e0e93e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/mYLQmezYdbg8e6d2P8Iwn/pages/_error.js",
    "revision": "9a75ea7c8e87b527ae8a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/mYLQmezYdbg8e6d2P8Iwn/pages/about.js",
    "revision": "51f653ea7c92d121ed53"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/mYLQmezYdbg8e6d2P8Iwn/pages/index.js",
    "revision": "136300ee1faa6e1e4854"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/mYLQmezYdbg8e6d2P8Iwn/pages/stats.js",
    "revision": "d8fcaaaa70ffcf669d68"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-d7b9dd42b9676d74e37a.js",
    "revision": "b841b48f29e2a9fe0220"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
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
