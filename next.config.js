// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/Nextjs_Ts_Eslint';

module.exports = withOffline({
  // service-worker settings
  registerSwPrefix: `${prodAssetPrefix}`,
  scope: `${prodAssetPrefix}/`,
  workboxOpts: {
    swDest: 'service-worker.js',
    globPatterns: ['app/static/**/*'],
    globDirectory: '.',
    modifyURLPrefix: {
      app: isProd ? prodAssetPrefix : '',
    },
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },

  // cdn settings
  assetPrefix: isProd ? prodAssetPrefix : '',
  publicRuntimeConfig: {
    linkPrefix: isProd ? prodAssetPrefix : '',
  },
});
