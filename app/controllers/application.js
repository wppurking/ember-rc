import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  username: '',
  password: '',

  ajaxing: false,
  isShowLogin: false,
  notifyCount: 0,

  showLoginClass: function() {
    return this.get('isShowLogin') ? 'show-login' : 'hidden-login';
  }.property('isShowLogin'),

  reset() {
    this.set('password', '');
    this.set('ajaxing', false);
  },

  init() {
    this._super();
    this.auth.login().then(() => {
      //   只有当成功登陆才去加载 Notification
      if(this.auth.get('isLogin')) {
        this.notifyCountInit();
      }
    });
  },

  notifyCountInit() {
    this.store.query('notification', {}).then((all) => {
      this.set('notifyCount', all.filterBy('read', false).get('length'));
    });
  },


  actions: {

    toggleLogin() {
      this.toggleProperty('isShowLogin');
    },

    login() {
      var controller = this;
      this.set('ajaxing', true);
      if(this.get('ajaxing')) {
        controller.auth.login(this.get('username'), this.get('password'))
          .finally(()=> {
            controller.reset();
          });
      }
    },

    logout() {
      this.auth.logout();
    },

    // TODO: For Test
    hello() {
      ajax('https://ruby-china.org/api/v3/hello.json', {method: 'GET'})
        .then((res) => {
          alert(JSON.stringify(res));
        }).catch(() => {
          alert('请求需要验证 Toekn, 请求失败.');
        });
    }
  }

});
