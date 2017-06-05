import Ember from 'ember';

const {
  Route,
  RSVP: { hash },
  get,
  inject: { service },
  setProperties
} = Ember;

export default Route.extend({
  followerManager: service(),

  model() {
    let store = get(this, 'store');
    return hash({
      user: store.findRecord('user', 1),
      resources: store.findRecord('resource-list', 1),
      missions: store.findAll('mission'),
      followers: store.findAll('follower'),
      toolList: store.findAll('tool-list')
    });
  },

  afterModel(hash) {
    get(this, 'followerManager').setFollowers(hash.followers);
  },

  setupController(controller, hash) {
    setProperties(controller, hash);
  }
});
