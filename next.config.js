// next.config.js

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/NextJs_Ts_Eslint';

module.exports = {
  // cdn settings
  assetPrefix: isProd ? prodAssetPrefix : '',
  publicRuntimeConfig: {
    linkPrefix: isProd ? prodAssetPrefix : '',
  },
};
