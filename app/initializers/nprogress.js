export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  console.log('nprogress.initializer 为 document 添加上 ajax 进度条. NProgress');
  Ember.$(document).ajaxStart(() => {
    NProgress.start();
  }).ajaxStop(() => {
    NProgress.done();
  });


  // TODO 不清楚为什么在 initilizer 中使用 .jshintrc 中定义的 $, 而需要使用 Ember.$ 来进行处理, 但是在整个 App 中 Ember.$ 与 $ 是同样的.
  console.log('nprogress.initializer 为 ajax 设置自动计算 Authorization header 的内容.');
  /**
   * TODO 当将 auth-manager 抽取到 Service 之后, 不适合在 initializer 中进行 DI, 所以这样的代码需要延迟处理
   Ember.$.ajaxSetup({
    beforeSend: function(xhr) {
      var token_obj = localStorage.getItem('token_obj');
      var token_json = JSON.parse(token_obj);
      if(token_obj && Ember.isPresent(token_json['token_type']) && Ember.isPresent(token_json['token_type'])) {
        xhr.setRequestHeader('Authorization', `${token_json['token_type']} ${token_json['access_token']}`);
      }
    }
  });
   */

}

export default {
  name: 'nprogress',
  initialize: initialize
};
