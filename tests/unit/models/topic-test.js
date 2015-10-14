import { moduleForModel, test } from 'ember-qunit';

moduleForModel('topic', 'Unit | Model | topic', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:reply']
});

test('it exists', function(assert) {
  console.log(assert);
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
