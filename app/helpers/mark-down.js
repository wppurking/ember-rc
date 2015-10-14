import Ember from 'ember';
import marked from 'marked';

export default Ember.Helper.helper(function(params) {
  return marked(params[0]);
});
