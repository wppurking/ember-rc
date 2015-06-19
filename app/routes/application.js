import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    login() {
      var ref = window.open('/ember-rc/', 'www', 'height=400,width=300');
      window.ref = ref;
    }
  }
});
