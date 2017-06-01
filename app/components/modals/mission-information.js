import Ember from 'ember';

const {
  Component,
  computed,
  computed: { alias },
  copy,
  get,
  set
} = Ember;

export default Component.extend({
  originalRequirements: null,

  requirements: alias('mission.requirements'),

  canHaveAnyFollower: computed('requirements.@each.detail', function() {
    let requirements = get(this, 'requirements');

    return requirements.findBy('type', 'follower').detail === 'any';
  }),

  didInsertElement() {
    let requirements = get(this, 'requirements');
    this._setOriginalRequirements(requirements);
    this._super(...arguments);
  },

  _setOriginalRequirements(requirements) {
    set(this, 'originalRequirements', copy(requirements));
  },

  _rollbackRequirements() {
    let originalRequirements = get(this, 'originalRequirements');
    set(this, 'mission.requirements', originalRequirements);
  },

  actions: {
    closeModal() {
      this._rollbackRequirements();
      get(this, 'hideMissionModal')();
    },
    startMission() {
      get(this, 'startMission')();
    },

    chooseFollower(follower) {
      set(this, 'showFollowerSelect', false);
      let mission = get(this, 'mission');
      let occupation = get(follower, 'occupation');

      let anyFollower = get(this, 'requirements').findBy('type', 'follower');
      let newFollower = { type: 'follower', detail: occupation };
      get(mission, 'requirements').removeObject(anyFollower).pushObject(newFollower);
    }
  }
});
