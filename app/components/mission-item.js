import Ember from 'ember';

const {
  Component,
  get,
  inject: { service },
  set
} = Ember;

export default Ember.Component.extend({
  classNames: ['mission'],
  mission: null,
  isShown: false,

  followerManager: service(),
  flashMessages: service(),

  _checkRequirements() {
    let requirements = get(this, 'mission.requirements');
    let followerManager = get(this, 'followerManager');
    let hasRequirements = true;

    requirements.forEach((requirement) => {
      if (requirement.type === 'follower') {
        if (!get(followerManager, 'currentOccupations').includes(requirement.detail)) {
          hasRequirements = false;
        }
        this._setFollower(requirement.detail, followerManager);
      }
    });
    return hasRequirements;
  },

  _setFollower(followerType, followerManager) {
    let mission = get(this, 'mission');
    if (followerType === 'any') {

    } else {
      let follower = followerManager.getFollowerByOccupation(followerType);
      set(mission, 'assignedFollower', follower);
    }
  },

  actions: {
    startMission() {
      set(this, 'showFollowerSelect', false);

      let mission = get(this, 'mission');
      if (!this._checkRequirements()) {
        get(this, 'flashMessages').danger('Missing some requirements');
        return;
      }
      get(this, 'startMission')(mission);
    },

    showMission() {
      // this.toggleProperty('isShown');
      set(this, 'isShown', true);
    }
  }
});
