import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modals/tool-crafter', 'Integration | Component | modals/tool crafter', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modals/tool-crafter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modals/tool-crafter}}
      template block text
    {{/modals/tool-crafter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
