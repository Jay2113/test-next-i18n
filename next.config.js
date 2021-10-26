const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { i18n } = require('./next-i18next.config');
const path = require('path');


module.exports = {
  i18n,
  reactStrictMode: true,
  target: "experimental-serverless-trace",
  localePath: path.resolve('./public/locales'),
        // environment varibales for production
        env: {
          IDP_DOMAIN: "auth.ab.hlee.space",
          USER_POOL_ID: "eu-west-1_5sku2Xw0X",
          USER_POOL_CLIENT_ID: "11dbiiqt8q2jci3130vk5drm76",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },

};
