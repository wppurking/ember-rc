import Ember from 'ember';

export default Ember.Helper.helper(function(params, hash) {
  return marked(params[0]);
});
