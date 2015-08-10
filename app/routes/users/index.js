import Ember from 'ember';

export default Ember.Route.extend({

  // 加载最活跃的用户
  model() {
    return this.store.query('user', {limit: 100});
  }

});
