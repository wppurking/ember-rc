import Ember from 'ember';
import AjaxProcessingMixin from '../../../mixins/ajax-processing';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax processing');

// Replace this with your real tests.
test('it works', function(assert) {
  var AjaxProcessingObject = Ember.Object.extend(AjaxProcessingMixin);
  var subject = AjaxProcessingObject.create();
  assert.ok(subject);
});
