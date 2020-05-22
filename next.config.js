/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable prefer-destructuring */
const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';
/* eslint-enable prefer-destructuring */

module.exports = () => ({
  target: 'serverless',
  poweredByHeader: false,
  assetPrefix: LINK_PREFIX,
});
