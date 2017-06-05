import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  actions: {
    closeModal() {
      get(this, 'hideModal')();
    }
  }
});
