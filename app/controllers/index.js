import Ember from 'ember';

export default Ember.Controller.extend({
  last_actived: function() {
    return this.model.sortBy('updated_at');
  }.property()
});
