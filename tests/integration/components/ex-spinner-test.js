import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ex-spinner', 'Integration | Component | ex spinner', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ex-spinner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ex-spinner}}
      template block text
    {{/ex-spinner}}
  `);

  assert.equal(this.$().text().trim(), '');
  var wraper = this.$('.whirly-loader-wrapper');
  assert.equal(wraper.size(), 1);
  assert.equal(wraper.find('.whirly-loader').size(), 1);
});
