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

  _checkResources(resource, value) {
    let currentAmount = get(this, `resources.${resource}`);
    return currentAmount >= value;
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
      }, duration);
    }
  }
});
