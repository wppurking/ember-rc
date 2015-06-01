import Ember from 'ember';
import ScrollResetMixin from '../../../mixins/scroll-reset';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll reset');

// Replace this with your real tests.
test('it works', function(assert) {
  var ScrollResetObject = Ember.Object.extend(ScrollResetMixin);
  var subject = ScrollResetObject.create();
  assert.ok(subject);
});
