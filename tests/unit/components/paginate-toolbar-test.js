import { moduleForComponent, test } from 'ember-qunit';

// TODO: 在 unit 中的 Component 测试, 如果是纯页面展示, 则无需测试.
// TOOD: 如果 Component 有复杂操作, 则需要测试相关 Action
moduleForComponent('paginate-toolbar', 'Unit | Component | paginate toolbar', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  component.set('pages', [1,2,3,4,5]);
  component.set('attrs.route', 'topic.show');
  this.render();
  assert.equal(component._state, 'inDOM');
});
