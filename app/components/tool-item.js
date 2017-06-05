import Ember from 'ember';

const {
  Component,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  actions: {
    hideToolInfo() {
      set(this, 'showToolInfo', false);
    },

    showToolInfoModal() {
      set(this, 'showToolInfo', true);
    }
  }
});
