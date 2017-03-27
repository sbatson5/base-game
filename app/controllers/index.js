import Ember from 'ember';

const {
  Controller,
  get,
  set
} = Ember;

export default Controller.extend({
  actions: {
    updateResource(resource, value) {
      let currentAmount = get(this, `resources.${resource}`);
      value += currentAmount;
      if (value < 0) {
        alert("not enough resources")
      } else {
        set(this, `resources.${resource}`, value);
      }
    }
  }
});
