import Ember from 'ember';
import ajax from 'ic-ajax';

/**
 * 用于处理用户:
 * 1. 登陆
 * 2. 登出
 * 3. 登陆后用户信息
 * 4. 登陆后保存状态的信息
 */
export default Ember.Service.extend({
  // 现在是没有持久化, 只能在 service 这个实例周期内有效, 页面刷新则登陆失败.
  // 需要补充 authToken 的持久化功能, 能够在页面刷新后仍然有效.
  // localStorage? Cookie? 暂不确定
  authToken: null,
  user: null,

  /**
   * 登陆
   * @retun 返回 Ember.RSVP.Promise 对象
   */
    login(user, paswd) {
    var service = this;
    if(this.reloadFromStoreage()) {
      service.registerTokenToAjaxHeader();
      return new Ember.RSVP.resolve(this.get('authToken'));
    } else if(Ember.isPresent(user) && Ember.isPresent(paswd)) {
      return ajax('https://ruby-china.org/oauth/token', {
        data: {username: user, password: paswd, grant_type: 'password'},
        method: 'POST'
      }).then((res) => {
        this.set('authToken', res);
        service.registerTokenToAjaxHeader();
        service.pushUsername(user);
      }).catch((xhr, err) => {
        console.error(`用户登陆失败, 因为 [${err}]`);
      });
    } else {
      // 一定要返回一个 Promise 对象
      return new Ember.RSVP.resolve(false);
    }
  },

  /**
   * 登出
   */
    logout() {
    this.set('authToken', null);
    this.set('user', null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    delete Ember.$.ajaxSetup.beforeSend;
  },

  /**
   * 持久化 token 进入 localStorage
   * 通过 observ 的模式监听两个元素的变化. (需要在页面上调用)
   */
  persitToken: function() {
    localStorage.setItem('authToken', JSON.stringify(this.get('authToken')));
    localStorage.setItem('user', JSON.stringify(this.get('user')));
    return '';
  }.property('authToken', 'user'),

  pushUsername(user) {
    var service = this;
    this.set('user', {login: user});
    ajax('https://ruby-china.org/api/v3/hello.json')
      .then((res) => {
        service.set('user', res['user']);
      });
  },

  reloadFromStoreage() {
    this.set('authToken', JSON.parse(localStorage.getItem('authToken')));
    this.set('user', JSON.parse(localStorage.getItem('user')));
    return this.get('isLogin');
  },


  registerTokenToAjaxHeader() {
    var service = this;
    if(Ember.isBlank($.ajaxSetup.beforeSend)) {
      Ember.$.ajaxSetup({
        beforeSend(xhr) {
          if(service.get('isLogin')) {
            xhr.setRequestHeader('Authorization', `${service.get('token_type')} ${service.get('token')}`);
          }
        }
      });
    }
  },

  // 是否登录
  isLogin: function() {
    return (Ember.isPresent(this.get('token')) && Ember.isPresent(this.get('token_type')));
  }.property('authToken'),


  //  --------------- after login -------------------
  token: function() {
    return this.get('authToken.access_token');
  }.property('authToken'),

  token_type: function() {
    return this.get('authToken.token_type');
  }.property('authToken'),

  username: function() {
    return this.get('user.login');
  }.property('user')
});
