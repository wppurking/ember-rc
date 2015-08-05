/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-rc',
    environment: environment,
    // 产品环境在 /ember-rc 开发/测试环境在 "/"" 根目录
    baseURL: '/ember-rc',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      login_base_URL: "http://localhost:4567"
    },

    // ember-cli 中的 [Content Security Policy]
    // http://content-security-policy.com/
    // https://github.com/rwjblue/ember-cli-content-security-policy
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' https://cdn.mxpnl.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' https://ruby-china.org http://localhost:4567 http://custom-api.local", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' data: https://ruby-china.org https://*.upaiyun.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    }
  };

  if(environment === 'development') {
    ENV.baseURL = '/';
    ENV.APP.login_base_URL = "http://localhost:4567";
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if(environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if(environment === 'production') {

  }

  return ENV;
};
