const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/Nextjs_Ts_Eslint';
const serviceWorkerFilename = 'service-worker.js';
const ampInstallServiceWorkerHtml = 'amp-install-service-worker.html';

module.exports = {
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
  ampInstallServiceWorkerHtml,
};
