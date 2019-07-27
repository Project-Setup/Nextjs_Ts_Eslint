self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/T_PuTweenxsbDftgMbURK/pages/_app.js",
    "revision": "243b495e5fc917ac411e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/T_PuTweenxsbDftgMbURK/pages/_error.js",
    "revision": "0efa60388692e3c36b3a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/T_PuTweenxsbDftgMbURK/pages/about.js",
    "revision": "e5280242b9666c4ce093"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/T_PuTweenxsbDftgMbURK/pages/index.js",
    "revision": "b408177bfd65759a76d6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/T_PuTweenxsbDftgMbURK/pages/stats.js",
    "revision": "ecfd8e40f82959771028"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.c38b8a2d0425c03fa72c.js",
    "revision": "cae937e98804c93a6826"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-3ed12da57b4a1422150b.js",
    "revision": "e279eb40f34f8ed248c5"
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
