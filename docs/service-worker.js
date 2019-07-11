self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.81b52a0cfce037a1ca95.js",
    "revision": "1bf7ceeaa288dfca772c"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jpgafb1qH4IRU21t2iLMT/pages/_app.js",
    "revision": "e78ab88eace659db84fa"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jpgafb1qH4IRU21t2iLMT/pages/_error.js",
    "revision": "521893aad72f52b452af"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jpgafb1qH4IRU21t2iLMT/pages/about.js",
    "revision": "fc208a4df13d9b27216e"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/jpgafb1qH4IRU21t2iLMT/pages/index.js",
    "revision": "96a223154e6893045587"
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
