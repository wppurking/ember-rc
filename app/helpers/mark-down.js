import Ember from 'ember';

export function markDown(params/*, hash*/) {
  return marked(params[0]);
}

export default Ember.HTMLBars.makeBoundHelper(markDown);
