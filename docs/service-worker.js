self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.3f0f127f446e7a82e54f.js",
    "revision": "2dbb754b7339da332899"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/gef4BOgB7l-xOg7MlMlOT/pages/_app.js",
    "revision": "e20e2772d7ac40f6b4d2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/gef4BOgB7l-xOg7MlMlOT/pages/_error.js",
    "revision": "8b80c1f0f15327591058"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/gef4BOgB7l-xOg7MlMlOT/pages/about.js",
    "revision": "5a83d5b6e4c78cf550af"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/gef4BOgB7l-xOg7MlMlOT/pages/index.js",
    "revision": "2ae587c2f0f4a5fee437"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/gef4BOgB7l-xOg7MlMlOT/pages/stats.js",
    "revision": "538ede04c0e2fe995f07"
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
