self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9hZ1O7EfV4wk91EKLPmUk/pages/_app.js",
    "revision": "8d5859394e25d5dfd2b5"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9hZ1O7EfV4wk91EKLPmUk/pages/_error.js",
    "revision": "14312b5e10fe8f5839f2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9hZ1O7EfV4wk91EKLPmUk/pages/about.js",
    "revision": "19300c386068cc358a8e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9hZ1O7EfV4wk91EKLPmUk/pages/index.js",
    "revision": "9abd3715c2d3f797712e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9hZ1O7EfV4wk91EKLPmUk/pages/stats.js",
    "revision": "5b9ef00c71f22b490bab"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.d1ef6ab58a5e26b173d4.js",
    "revision": "3070693a99c3fe9d9410"
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
