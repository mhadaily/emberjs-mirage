import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('language-select', 'Integration | Component | language select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{language-select}}`);

  assert.equal(this.$().text().trim(),`English
    
    
      German`);

  // Template block usage:
  this.render(hbs`
    {{#language-select}}
      template block text
    {{/language-select}}
  `);

  assert.equal(this.$().text().trim(), `English
    
    
      German
    

      template block text`);
});
