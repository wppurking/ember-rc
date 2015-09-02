export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  /*
  console.log('nprogress.initializer 为 document 添加上 ajax 进度条. NProgress');
  Ember.$(document).ajaxStart(() => {
    //NProgress.start();
    NProgress.set(0.2);
    NProgress.inc();
    Ember.run.later(() => {
      NProgress.set(0.4);
      NProgress.inc();
    }, 80);
  }).ajaxStop(() => {
    NProgress.done();
  });
  */
}

export default {
  name: 'nprogress',
  initialize: initialize
};
