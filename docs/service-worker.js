self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/Ag1-H9BQ8qL399UZAed2D/pages/_app.js",
    "revision": "528514cb53a9f276da2a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/Ag1-H9BQ8qL399UZAed2D/pages/_error.js",
    "revision": "078779e12c84017f1d50"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/Ag1-H9BQ8qL399UZAed2D/pages/about.js",
    "revision": "25e4b3839d766896e8d1"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/Ag1-H9BQ8qL399UZAed2D/pages/index.js",
    "revision": "888b94cf3c36f9ce7b30"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.7bfedba93e6c37a18c8c.js",
    "revision": "422eb8913c8835d7d472"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-33cbff5ac9d95d524a1f.js",
    "revision": "dd6f6312ad97b0a09c93"
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
