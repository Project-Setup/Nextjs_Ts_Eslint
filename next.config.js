// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withManifest = require('next-manifest');

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/Nextjs_Ts_Eslint';

module.exports = withManifest(
  withOffline({
    // service-worker settings
    registerSwPrefix: prodAssetPrefix,
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

    manifest: {
      /* eslint-disable @typescript-eslint/camelcase */
      short_name: 'Nextjs_Ts_Eslint',
      name: 'Nextjs Ts Eslint',
      start_url: `${prodAssetPrefix}/`,
      background_color: 'red',
      display: 'standalone',
      scope: `${prodAssetPrefix}/`,
      dir: 'ltr',
      theme_color: 'red',
      icons: false,
      /* eslint-enable @typescript-eslint/camelcase */
    },

    // cdn settings
    assetPrefix: isProd ? prodAssetPrefix : '',
    publicRuntimeConfig: {
      linkPrefix: isProd ? prodAssetPrefix : '',
    },
  })
);
