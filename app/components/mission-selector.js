import Ember from 'ember';

const {
  Component,
  computed: { filterBy },
  get,
  inject: { service },
  isPresent,
  run: { later },
  set
} = Ember;

export default Component.extend({
  incompleteMissions: filterBy('missions', 'isCompleted', false),
  flashMessages: service(),
  followerManager: service(),

  _checkResources(resource, value) {
    let currentAmount = get(this, `resources.${resource}`);
    return currentAmount >= value;
  },

  _handleFollower(follower) {
    let odds = Math.random();

    // always a 90 percent chance that the follower dies
    if (odds > 0.9) {
      let followerManager = get(this, 'followerManager');

      get(this, 'flashMessages').danger(`Oh no, it looks like ${get(follower, 'name')} died a horrible death`);

      followerManager.killFollower(follower);
    }
  },

  actions: {
    startMission(mission) {
      let flashMessages = get(this, 'flashMessages');
      let duration = get(mission, 'duration');
      let { resource, value } = get(mission, 'reward');
      let cost = get(mission, 'cost');
      let updateResource = get(this, 'updateResource');

      if (isPresent(cost)) {
        let { resource, value } = cost;

        if (this._checkResources(resource, value)) {
          updateResource(resource, (parseInt(value) * -1));
        } else {
          // error
          flashMessages.danger(`You don't have enough ${resource}`);
          return;
        }
      }

      set(mission, 'isCompleted', true);
      mission.save().then(() => {
        flashMessages.success('Mission started!');
      }).catch(() => {
        console.log('error');
      });

      later(() => {
        updateResource(resource, value);
        this._handleFollower(get(mission, 'assignedFollower'));
      }, duration);
    }
  }
});
