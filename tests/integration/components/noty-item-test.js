import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// 在测试这个 Component 的时候, 因为这个 Component 里面还使用了其他的 Component, 但由于 moduleForComponent
// 只会引入当前这一个 Component, 所以里面使用的 Component 会是没有初始化的, 现在还不知道这样的问题该如何测试?

// 另外, 在 moduleForComponent 的 callback 方法中添加 needs, 将会自动变为 unit test
moduleForComponent('noty-item', 'Integration | Component | noty item', {
  //needs: ['component:time-in-words', 'component:mark-down'],
  integration: true
});

test('[20%] have user.show path', function(assert) {
  var noty = Ember.Object.create({
    actor: {
      login: 'wyatt'
    }
  });

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  //this.render(hbs`{{noty-item}}`);

  assert.equal(1, 1);
});
