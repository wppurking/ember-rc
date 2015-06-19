import Ember from 'ember';

export default Ember.Controller.extend({
  username: 'wyatt@easya.cc',
  password: '132456',

  ajaxing: false,

  reset() {
    this.set('password', '');
    this.set('ajaxing', false);
  },

  actions: {
    login() {
      var controller = this;
      this.set('ajaxing', true);
      if(this.get('ajaxing')) {
        controller.auth.login(this.get('username'), this.get('password'))
          .always(()=> {
            controller.reset();
          });
      }
    },


    hello() {
      $.ajax('https://ruby-china.org/api/v3/hello.json', {method: 'GET'})
        .done((res) => {
          alert(JSON.stringify(res));
        }).fail(() => {
          alert('请求需要验证 Toekn, 请求失败.');
        });
    }


  }

});
