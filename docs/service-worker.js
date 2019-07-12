self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ZLLU_2GdLx6axeMAQvHkL/pages/_app.js",
    "revision": "d25aa911418c014ae16b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ZLLU_2GdLx6axeMAQvHkL/pages/_error.js",
    "revision": "111ca2d5afb245061574"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ZLLU_2GdLx6axeMAQvHkL/pages/about.js",
    "revision": "77ec5bfeccbfcf01308d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ZLLU_2GdLx6axeMAQvHkL/pages/index.js",
    "revision": "aac9af7e2e8453232108"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.187c7a96ab5c3aa33b50.js",
    "revision": "a87860b258dde003e680"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-bd06856657f35371d326.js",
    "revision": "c012f364407a035f27d4"
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
