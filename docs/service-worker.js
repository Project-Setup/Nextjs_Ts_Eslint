self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8DQJrYpGG_ITUpKCSylVX/pages/_app.js",
    "revision": "0c0e6d5908603a1ec866"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8DQJrYpGG_ITUpKCSylVX/pages/_error.js",
    "revision": "6455ae2d18c21f496ce4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8DQJrYpGG_ITUpKCSylVX/pages/about.js",
    "revision": "9704ba6cfdb46da38bbb"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8DQJrYpGG_ITUpKCSylVX/pages/index.js",
    "revision": "3343582b56a25e1763bf"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/8DQJrYpGG_ITUpKCSylVX/pages/stats.js",
    "revision": "29fd2bd62bc96395493f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.58eb3aa27f37e0e1c05f.js",
    "revision": "778f7262f74790d5aa47"
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
