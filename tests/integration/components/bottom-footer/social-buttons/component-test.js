import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bottom-footer/social-buttons', 'Integration | Component | bottom footer/social buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bottom-footer/social-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bottom-footer/social-buttons}}
      template block text
    {{/bottom-footer/social-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
