/* eslint-disable @typescript-eslint/no-var-requires */
const envMapping = require('./configs/env.mapping');

module.exports = () => ({
  env: envMapping,
  target: 'serverless',
  poweredByHeader: false,
  assetPrefix: envMapping.LINK_PREFIX,
});
