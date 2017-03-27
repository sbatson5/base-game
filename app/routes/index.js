import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
  get,
  setProperties
} = Ember;

export default Route.extend({
  model() {
    let store = get(this, 'store');
    return hash({
      user: store.findRecord('user', 1),
      resources: store.findRecord('resource-list', 1),
      missions: store.findAll('mission')
    });
  },

  setupController(controller, hash) {
    setProperties(controller, hash);
  }
});
