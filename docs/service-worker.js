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
    "url": "/Nextjs_Ts_Eslint/_next/static/uae83DCvw-8igPU6HmCqh/pages/_app.js",
    "revision": "85628b5f5424291e93f7"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uae83DCvw-8igPU6HmCqh/pages/_error.js",
    "revision": "4b70b53ef2efaed3e679"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uae83DCvw-8igPU6HmCqh/pages/about.js",
    "revision": "001390eb4f7306b68f7f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uae83DCvw-8igPU6HmCqh/pages/amp-install-serviceworker-script.js",
    "revision": "44cadf7f34198139de38"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uae83DCvw-8igPU6HmCqh/pages/count.js",
    "revision": "c4cfee9c9af62175e2b9"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uae83DCvw-8igPU6HmCqh/pages/stats.js",
    "revision": "8e16e372726b9d154e9b"
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
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
