import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-header/nav-bar', 'Integration | Component | top header/nav bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-header/nav-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#top-header/nav-bar}}
      template block text
    {{/top-header/nav-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
