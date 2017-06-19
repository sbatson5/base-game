import Ember from 'ember';

const {
  Component,
  set
} = Ember;

export default Component.extend({
  actions: {
    hideToolInfo() {
      set(this, 'showToolInfo', false);
    },

    showToolInfoModal() {
      set(this, 'showToolInfo', true);
    }
  }
});
