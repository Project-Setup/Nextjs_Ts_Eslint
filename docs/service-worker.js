self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ioIE-USvXG8HhhjKX13NH/pages/_app.js",
    "revision": "9f5d20724fb9765d9330"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ioIE-USvXG8HhhjKX13NH/pages/_error.js",
    "revision": "7ce113d5d61160c7fc04"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ioIE-USvXG8HhhjKX13NH/pages/about.js",
    "revision": "2d9f9d3f0cd2ee21628c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ioIE-USvXG8HhhjKX13NH/pages/amp-install-serviceworker-script.js",
    "revision": "b001d5e42fe9a081331d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ioIE-USvXG8HhhjKX13NH/pages/count.js",
    "revision": "ec00bec4d4ee749cdd5a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/ioIE-USvXG8HhhjKX13NH/pages/stats.js",
    "revision": "ce7209713125166c8798"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-2570a7045a83e31895c5.js",
    "revision": "5d8a4c957e9acb35cfd5"
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
