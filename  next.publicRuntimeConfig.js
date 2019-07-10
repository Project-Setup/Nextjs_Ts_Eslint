const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/Nextjs_Ts_Eslint';

module.exports = {
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
};
