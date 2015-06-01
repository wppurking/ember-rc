/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// 需要定制这个 vendor 的 css 所以无法使用 bower_component 里面的
// TODO 不知道为什么无法在 vendor 里面使用 scss?
app.import('vendor/nprogress.css');


app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
app.import('bower_components/nprogress/nprogress.js');

module.exports = app.toTree();
