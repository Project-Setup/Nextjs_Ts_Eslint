self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.e4827549089e03ce3188.js",
    "revision": "35119c41c1f5e0b9f873"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ligEgsKOEOdoBUAlZ810K/pages/_app.js",
    "revision": "759503f07718faa512c3"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ligEgsKOEOdoBUAlZ810K/pages/_error.js",
    "revision": "0555edf9d8ed68bd381c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ligEgsKOEOdoBUAlZ810K/pages/about.js",
    "revision": "f25bd08418398f07f95c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ligEgsKOEOdoBUAlZ810K/pages/index.js",
    "revision": "4640b6f0c8802ba6d5f7"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-50ba11e27caf353b6b5b.js",
    "revision": "8ab6bb8f3eb07bb73760"
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
