/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, `../.env/${process.env.NODE_ENV}.env`),
});

// env mapping for exposure to client
module.exports = {
  TEST_CLIENT: process.env.test,
  TEST_PAGE_VAR: process.env.TEST_PAGE_VAR,
  ENV: process.env.NODE_ENV,
  LINK_PREFIX: process.env.LINK_PREFIX,
};
