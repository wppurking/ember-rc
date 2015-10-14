import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uploader-icon', 'Integration | Component | uploader icon', {
  integration: true
});


// 这个 Component 的 integration 测试中, 使用了一个 utils-service, 如果这个 Service 很简单, 我们可以直接参考 Doc 中的 stub
// 来解决, 但如果这个 Service 很复杂, 那我又需要如何解决?

// TODO 这个问题与 noty-item-test 中的很相似: 一个为如何引入其他 Component, 一个如何引入其他 Service

test('[20%] how to import another Utils-Service', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  //this.render(hbs`{{uploader-icon}}`);

  assert.equal(1, 1);
});
