import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
  get,
  setProperties
} = Ember;

export default Route.extend({
  model() {
    return hash({
      user: get(this, 'store').findRecord('user', 1),
      resources: get(this, 'store').findRecord('resource-list', 1)
    });
  },

  setupController(controller, hash) {
    setProperties(controller, hash);
  }
});
