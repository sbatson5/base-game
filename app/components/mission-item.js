import Ember from 'ember';
import { missingFollower } from 'base-game/utils/failure-dialogue';

const {
  Component,
  computed: { alias, filterBy },
  get,
  inject: { service },
  set
} = Ember;

export default Component.extend({
  classNames: ['mission'],
  mission: null,
  isShown: false,
  chatMessages: null,

  followerManager: service(),
  flashMessages: service(),
  conversationManager: service(),

  requirements: alias('mission.requirements'),
  followerRequirements: filterBy('requirements', 'type', 'follower'),

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
        let followerType = get(this, 'followerRequirements.firstObject.detail');
        let messages = missingFollower(followerType);
        get(this, 'conversationManager').startConversation(messages);
        return;
      }
      get(this, 'startMission')(mission);
    },

    hideMissionModal() {
      set(this, 'showMissionInformation', false);
    }
  }
});
