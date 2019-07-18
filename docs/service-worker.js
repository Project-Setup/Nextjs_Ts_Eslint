self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.fc7fbf21eae53e738a9b.js",
    "revision": "2ec15b9540b62290296f"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/_app.js",
    "revision": "e75d509faf8ce9c20bbe"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/_error.js",
    "revision": "4934c9f5d125992cb0bb"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/about.js",
    "revision": "6fd3c4a412bb4a0c7b75"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/amp-install-serviceworker-script.js",
    "revision": "068bcf11c24c7dfa7c4b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/count.js",
    "revision": "19381ced3be6768009f4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/index.js",
    "revision": "ad892d64555ce2b4839d"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jHS2XhDcZksgUq1NoFWaB/pages/stats.js",
    "revision": "e73fe5579e43ca6032f9"
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
