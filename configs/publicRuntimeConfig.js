const { name, keywords } = require('../package.json');

const staticOptimization = true;
const displayName = 'Nextjs_Ts_Eslint';
const themeColor = 'red';
const png192Path = '/static/icons/icon192x192.png';
const png512Path = '/static/icons/icon512x512.png';
const favIconPath = '/static/icons/favicon.ico';

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/' + name;
const serviceWorkerFilename = 'service-worker.js';
const commonKeywords = keywords.join(',');
const manifestPath = '/static/manifest.json';

module.exports = {
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
  displayName,
  themeColor,
  commonKeywords,
  staticOptimization,
  png192Path,
  png512Path,
  favIconPath,
  manifestPath,
};
