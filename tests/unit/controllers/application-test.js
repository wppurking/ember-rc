import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['service:auth-manager'],

  beforeEach: function() {
    //TODO 这个我还不知道如何测试在 Controller 里面有统一注入的 Service.
    // 使用 Ember.inject.service('auth-manager') 注入的话还有简单的方法.
    this.inject.service('auth', 'service:auth-manager');
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});
