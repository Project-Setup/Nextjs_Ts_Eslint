self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/7soyGw178yn7EkQCqZvgw/pages/_app.js",
    "revision": "671f8312fc6001dd63f0"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/7soyGw178yn7EkQCqZvgw/pages/_error.js",
    "revision": "86914b5b4938e1d215a4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/7soyGw178yn7EkQCqZvgw/pages/about.js",
    "revision": "28b16f37945ac7ddaefe"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/7soyGw178yn7EkQCqZvgw/pages/index.js",
    "revision": "9bd763d9dc40635f7db5"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.3c51623ad91f5d9f00cb.js",
    "revision": "4795971e26077e524d0c"
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
