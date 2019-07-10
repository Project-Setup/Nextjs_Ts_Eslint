self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.42eba08c58dbfff27c04.js",
    "revision": "3de330a110192aab51ac"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/j9qNVCfWwRkCQabCgCm1Z/pages/_app.js",
    "revision": "683d6a85679e715127d3"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/j9qNVCfWwRkCQabCgCm1Z/pages/_error.js",
    "revision": "9d1239ac757d7aee549e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/j9qNVCfWwRkCQabCgCm1Z/pages/about.js",
    "revision": "e07379fbb368a96a4d1c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/j9qNVCfWwRkCQabCgCm1Z/pages/index.js",
    "revision": "3d595975de6c3552337f"
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
