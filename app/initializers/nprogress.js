export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  console.log('为 document 添加上 ajax 进度条. NProgress');
  $(document).ajaxStart(() => {
    NProgress.start();
  }).ajaxStop(() => {
    NProgress.done();
  });
}

export default {
  name: 'nprogress',
  initialize: initialize
};
