self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9UxCeMUQOAYF_MBnEjTlF/pages/_app.js",
    "revision": "4aa39ae8dc6674e1f8f0"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9UxCeMUQOAYF_MBnEjTlF/pages/_error.js",
    "revision": "3d9da07d61695063e57f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9UxCeMUQOAYF_MBnEjTlF/pages/about.js",
    "revision": "851d90534daf196c8974"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9UxCeMUQOAYF_MBnEjTlF/pages/amp-install-serviceworker-script.js",
    "revision": "a3c39d8bdc2a4b7d8781"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9UxCeMUQOAYF_MBnEjTlF/pages/count.js",
    "revision": "5d2f8c7779ab3233ccfa"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/9UxCeMUQOAYF_MBnEjTlF/pages/stats.js",
    "revision": "b6aaf2dcd6b25b2fa22e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.38a5674e7e81a3ba4a63.js",
    "revision": "07674c4a27bfcbf3c8f4"
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

workbox.navigationPreload.enable();

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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.CacheFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
