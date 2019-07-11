self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.2a66e58770a98c423102.js",
    "revision": "ec3eb28620939d1567a6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jwgj3ENiZ6LbHjDe7fnGr/pages/_app.js",
    "revision": "c9684b9b99fc9a1e2e65"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jwgj3ENiZ6LbHjDe7fnGr/pages/_error.js",
    "revision": "ed6df979a49a9a123c28"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jwgj3ENiZ6LbHjDe7fnGr/pages/about.js",
    "revision": "5fa7a904ae012d92651c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jwgj3ENiZ6LbHjDe7fnGr/pages/index.js",
    "revision": "02ad32e1a1b9082579b6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-486b57fa513de796ddbe.js",
    "revision": "c3db4108b11dffd6bddc"
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
