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

  /**
   * 登陆
   * @retun 返回 jqXhr 的 promise 对象
   */
  login(user, paswd) {
    var service = this;
    if(this.reloadFromStoreage()) {
      //service.registerTokenToAjaxHeader();
      return new Ember.RSVP.Promise(function() {
        service.registerTokenToAjaxHeader();
      });
    } else if(Ember.isPresent(user) && Ember.isPresent(paswd)) {
      return ajax(`${EmberRc.login_base_URL}/login`, {
        data: {username: user, password: paswd},
        method: 'POST'
      }).then((res) => {
        if(res.code === 200) {
          service.persitToken(res);
          service.registerTokenToAjaxHeader();
        }
      }).catch((xhr, err) => {
        console.error(`用户登陆失败, 因为 [${err}]`);
      });
    }
  },

  /**
   * 持久化 token 进入 localStorage
   */
  persitToken(token) {
    localStorage.setItem('authToken', JSON.stringify(token));
    this.set('authToken', token);
  },

  reloadFromStoreage() {
    var token = JSON.parse(localStorage.getItem('authToken'));
    this.set('authToken', token);
    return this.validAuthorization();
  },


  registerTokenToAjaxHeader() {
    var service = this;
    if(service.validAuthorization()) {
      Ember.$.ajaxSetup({
        beforeSend(xhr) {
          xhr.setRequestHeader('Authorization', `${service.get('token_type')} ${service.get('token')}`);
        }
      });
    }
  },

  // 如果不合法, 那么就不需要向 header 上添加 Authorization 信息
  validAuthorization() {
    return (Ember.isPresent(this.get('token')) && Ember.isPresent(this.get('token_type')));
  },


  //  --------------- after login -------------------
  token: function() {
    return this.get('authToken.access_token');
  }.property('authToken'),

  token_type: function() {
    return this.get('authToken.token_type');
  }.property('authToken')
});
