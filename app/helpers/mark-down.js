import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  return marked(params[0]);
});
