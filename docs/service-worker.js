self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.962e3a30400cc7a5fe9a.js",
    "revision": "9ededcd86553977a7903"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/e-XVaeFc4BtlclDSCxF6J/pages/_app.js",
    "revision": "6f84c1f20c0776d6cbf5"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/e-XVaeFc4BtlclDSCxF6J/pages/_error.js",
    "revision": "f69af289c8252595ff56"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/e-XVaeFc4BtlclDSCxF6J/pages/about.js",
    "revision": "be1c0945ff8552875f3c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/e-XVaeFc4BtlclDSCxF6J/pages/index.js",
    "revision": "d02c354acd9211004f93"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/e-XVaeFc4BtlclDSCxF6J/pages/stats.js",
    "revision": "0fbc6da38914cefec857"
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
