import Ember from 'ember';

const {
  Component,
  computed: { filterBy },
  get,
  isPresent,
  run: { later },
  set
} = Ember;

export default Component.extend({
  incompleteMissions: filterBy('missions', 'isCompleted', false),

  _checkResources(resource, value) {
    let currentAmount = get(this, `resources.${resource}`);
    return currentAmount >= value;
  },

  actions: {
    startMission(mission) {
      let duration = get(mission, 'duration');
      let { resource, value } = get(mission, 'reward');
      let cost = get(mission, 'cost');
      let updateResource = get(this, 'updateResource');

      if (isPresent(cost)) {
        let { resource, value } = cost;

        if (this._checkResources(resource, value)) {
          updateResource(costResource, (parseInt(costValue) * -1));
        } else {
          // error
          return;
        }
      }

      set(mission, 'isCompleted', true);
      mission.save().then(() => {
        // get(this, 'missions').removeObject(mission);
      }).catch(() => {
        console.log('error');
      });

      later(() => {
        updateResource(resource, value);
      }, duration);
    }
  }
});
