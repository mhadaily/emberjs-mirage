import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bottom-footer/copyright-text', 'Integration | Component | bottom footer/copyright text', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bottom-footer/copyright-text}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bottom-footer/copyright-text}}
      template block text
    {{/bottom-footer/copyright-text}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
