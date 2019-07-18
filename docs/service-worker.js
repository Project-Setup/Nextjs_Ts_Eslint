self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-2570a7045a83e31895c5.js",
    "revision": "5d8a4c957e9acb35cfd5"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-02abf031fc7e13766d3d.js",
    "revision": "fba09cad31602b08916f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/yulZqqcU1iSJQLOV8fJoz/pages/_app.js",
    "revision": "3f6bb52f8b1f26c8ff62"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/yulZqqcU1iSJQLOV8fJoz/pages/_error.js",
    "revision": "d15eda00f316475f7cdd"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/yulZqqcU1iSJQLOV8fJoz/pages/about.js",
    "revision": "02abaac2a9cd80593ee2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/yulZqqcU1iSJQLOV8fJoz/pages/amp-install-serviceworker-script.js",
    "revision": "9c6e82c4208f3c946117"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/yulZqqcU1iSJQLOV8fJoz/pages/count.js",
    "revision": "40274909fcb03bb052fb"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/yulZqqcU1iSJQLOV8fJoz/pages/stats.js",
    "revision": "4b489cda8f710219931b"
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
