// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withManifest = require('next-manifest');
const publicRuntimeConfig = require('./ next.publicRuntimeConfig');

const { linkPrefix, prodAssetPrefix, serviceWorkerFilename } = publicRuntimeConfig;

module.exports = withManifest(
  withOffline({
    // service-worker settings
    registerSwPrefix: prodAssetPrefix,
    scope: `${prodAssetPrefix}/`,
    workboxOpts: {
      swDest: serviceWorkerFilename,
      globPatterns: ['app/static/**/*'],
      globDirectory: '.',
      exclude: [/\/pages\/amp[^a-zA-Z/]*\.js$/, '**/node_modules/**/*'],
      modifyURLPrefix: {
        app: linkPrefix,
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
      icons: [
        {
          src: `${prodAssetPrefix}/static/icons/icon192x192.png`,
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: `${prodAssetPrefix}/static/icons/icon512x512.png`,
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      /* eslint-enable @typescript-eslint/camelcase */
    },

    // cdn settings
    assetPrefix: linkPrefix,
    amp: {
      canonicalBase: linkPrefix,
    },
    publicRuntimeConfig,
  })
);
