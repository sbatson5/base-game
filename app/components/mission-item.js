import Ember from 'ember';

const {
  Component,
  computed,
  computed: { alias },
  get,
  inject: { service },
  set
} = Ember;

export default Component.extend({
  classNames: ['mission'],
  mission: null,
  isShown: false,

  followerManager: service(),
  flashMessages: service(),

  requirements: alias('mission.requirements'),

  _checkRequirements() {
    let requirements = get(this, 'requirements');
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
      set(this, 'showMissionInformation', false);

      let mission = get(this, 'mission');
      if (!this._checkRequirements()) {
        get(this, 'flashMessages').danger('Missing some requirements');
        return;
      }
      get(this, 'startMission')(mission);
    },

    hideMissionModal() {
      set(this, 'showMissionInformation', false);
    }
  }
});
