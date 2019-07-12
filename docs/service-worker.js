self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/3MkQjn7UX0vvXYjDPKiHt/pages/_app.js",
    "revision": "dfaba0e4a234679b9456"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/3MkQjn7UX0vvXYjDPKiHt/pages/_error.js",
    "revision": "0d76c1c1fb9df177d02a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/3MkQjn7UX0vvXYjDPKiHt/pages/about.js",
    "revision": "883cdd4b2a2a4e0ffdd6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/3MkQjn7UX0vvXYjDPKiHt/pages/index.js",
    "revision": "66f637f983d2510a1cc3"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.81b52a0cfce037a1ca95.js",
    "revision": "1bf7ceeaa288dfca772c"
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
