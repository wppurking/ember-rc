import Ember from 'ember';

export default Ember.Controller.extend({
  isAdmin: function() {
    return this.get('model.id') < 10;
  }.property('model')

});
