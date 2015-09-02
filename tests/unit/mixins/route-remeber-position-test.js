import Ember from 'ember';
import RouteRemeberPositionMixin from '../../../mixins/route-remeber-position';
import { module, test } from 'qunit';

module('Unit | Mixin | route remeber position');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouteRemeberPositionObject = Ember.Object.extend(RouteRemeberPositionMixin);
  var subject = RouteRemeberPositionObject.create();
  assert.ok(subject);
});
