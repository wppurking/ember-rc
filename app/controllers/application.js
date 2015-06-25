import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  username: 'wyatt@easya.cc',
  password: '132456',

  ajaxing: false,

  reset() {
    this.set('password', '');
    this.set('ajaxing', false);
  },

  init() {
    this._super();
    this.auth.login();
  },

  actions: {
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
