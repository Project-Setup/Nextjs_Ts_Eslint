self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.6fa85b27cc28e70c7957.js",
    "revision": "53318b5b1ad62fdd718e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/n3dGYQejvC3HxiCe6FoTp/pages/_app.js",
    "revision": "f571fd896417d98cff20"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/n3dGYQejvC3HxiCe6FoTp/pages/_error.js",
    "revision": "f3ff7dac5f0cd4d43ecb"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/n3dGYQejvC3HxiCe6FoTp/pages/about.js",
    "revision": "77c0e290dfab6d99cb92"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/n3dGYQejvC3HxiCe6FoTp/pages/index.js",
    "revision": "84ee63a0ae36eacf6e3d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/n3dGYQejvC3HxiCe6FoTp/pages/stats.js",
    "revision": "c69ced217942d37aa9d9"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-3ed12da57b4a1422150b.js",
    "revision": "e279eb40f34f8ed248c5"
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
