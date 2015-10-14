import { moduleForModel, test } from 'ember-qunit';

moduleForModel('notification', 'Unit | Model | notification', {
  // Specify the other units that are required for this test.
  // 有用到相关联关系的 model, 全部都需要在这里说清楚...
  needs: ['model:user', 'model:reply', 'model:topic']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
