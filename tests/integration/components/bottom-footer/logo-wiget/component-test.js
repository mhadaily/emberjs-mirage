import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bottom-footer/logo-wiget', 'Integration | Component | bottom footer/logo wiget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bottom-footer/logo-wiget}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bottom-footer/logo-wiget}}
      template block text
    {{/bottom-footer/logo-wiget}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
