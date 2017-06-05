import Ember from 'ember';

const {
  Controller,
  get,
  set
} = Ember;

export default Controller.extend({
  isSelectingFollower: false,
  selectedMission: null,
  showToolModal: false,

  actions: {
    updateResource(resource, value) {
      let currentAmount = get(this, `resources.${resource}`);
      value += currentAmount;
      if (value < 0) {
        alert("not enough resources");
      } else {
        set(this, `resources.${resource}`, value);
      }
    },

    displayToolModal() {
      set(this, 'showToolModal', true);
    },

    hideToolModal() {
      set(this, 'showToolModal', false);
    }
  }
});
