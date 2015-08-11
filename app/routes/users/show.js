import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("Into routes.users.show");
    console.log(params);
    return this.store.findRecord('user', params.user_id);
  }
});
