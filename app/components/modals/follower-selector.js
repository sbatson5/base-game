import Ember from 'ember';

const {
  Component,
  get,
  inject: { service }
} = Ember;

export default Component.extend({
  followerManager: service(),

  actions: {
    setFollower(follower) {
      get(this, 'selectFollower')(follower);
    }
  }
});
