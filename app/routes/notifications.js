import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // 这里需要权限验证
    if(!this.auth.get('isLogin')) {
      this.transitionTo('application');
      Ember.run.scheduleOnce('afterRender', function() {
        //alert('您还未登陆呢.');
        console.log('您还未登陆呢.')
      });
    }
  },


  model() {
    return this.store.query('notification', {});
  }
});
