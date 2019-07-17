self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.17fb3cefbf0436adf927.js",
    "revision": "14d8809f7fa4406908bd"
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
    "url": "/Nextjs_Ts_Eslint/_next/static/x-ZDERJcB04z8xLSei-Hm/pages/_app.js",
    "revision": "089f81486c1f5d86f63d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/x-ZDERJcB04z8xLSei-Hm/pages/_error.js",
    "revision": "3be25ae97f81f02d69a1"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/x-ZDERJcB04z8xLSei-Hm/pages/about.js",
    "revision": "86b19c0480f1380e7499"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/x-ZDERJcB04z8xLSei-Hm/pages/index.js",
    "revision": "f9b32e5f97fa82e5b990"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/x-ZDERJcB04z8xLSei-Hm/pages/stats.js",
    "revision": "09af481fe2b0eb09fcc0"
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
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
