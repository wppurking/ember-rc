import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  username: '',
  password: '',

  ajaxing: false,
  isShowLogin: false,
  showLoginClass: function() {
    return this.get('isShowLogin') ? 'show-login' : '';
  }.property('isShowLogin'),

  reset() {
    this.set('password', '');
    this.set('ajaxing', false);
  },

  init() {
    this._super();
    this.auth.login();
  },



  actions: {

    toggleLogin() {
      this.toggleProperty('isShowLogin');
      Ember.$('#login-form').css('top', 40).css('left', -130);
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
    user() {
      console.log(this.auth.get('user'));
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
