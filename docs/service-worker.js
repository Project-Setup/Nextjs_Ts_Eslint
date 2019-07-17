self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OA-zCJvl_mwIqgs1axkgx/pages/_app.js",
    "revision": "dd51377aaddb23cc4aac"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OA-zCJvl_mwIqgs1axkgx/pages/_error.js",
    "revision": "6d3162d99898e20a9e6f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OA-zCJvl_mwIqgs1axkgx/pages/about.js",
    "revision": "6167a81040ad4ecc51d6"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OA-zCJvl_mwIqgs1axkgx/pages/amp-install-service-worker.js",
    "revision": "a140a214e81e39195223"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OA-zCJvl_mwIqgs1axkgx/pages/count.js",
    "revision": "54b74b2e998ca2c9c93e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/OA-zCJvl_mwIqgs1axkgx/pages/stats.js",
    "revision": "2a40d165d6280c2cf3b1"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-5856a6fa252953fc3e00.js",
    "revision": "8aea4166013567da6174"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-02abf031fc7e13766d3d.js",
    "revision": "fba09cad31602b08916f"
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
