import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modals/chat-dialogue', 'Integration | Component | modals/chat dialogue', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modals/chat-dialogue}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#modals/chat-dialogue}}
      template block text
    {{/modals/chat-dialogue}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
