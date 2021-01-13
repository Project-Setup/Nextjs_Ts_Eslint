const LINK_PREFIX = process.env.NEXT_PUBLIC_LINK_PREFIX || '';

module.exports = () => ({
  target: 'serverless',
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: LINK_PREFIX,
});
