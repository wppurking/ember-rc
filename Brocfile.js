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


// Bootstrap Glyphicons 引入:
// * http://stackoverflow.com/questions/23349959/recommended-way-to-include-bootstrap-library-in-ember-js-ember-cli-app
['eot', 'ttf', 'svg', 'woff', 'woff2'].forEach(function(sufix) {
  app.import("bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular." + sufix, {
    destDir: 'fonts/bootstrap'
  });
});


app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');
app.import('bower_components/nprogress/nprogress.js');

app.import('bower_components/moment/moment.js');
app.import('bower_components/moment/locale/zh-cn.js');

app.import('bower_components/marked/marked.min.js');
app.import('bower_components/textarea-autosize/src/jquery.textarea_autosize.js');


module.exports = app.toTree();
