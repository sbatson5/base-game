import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Ember.Component.extend({
  classNames: ['mission'],

  actions: {
    startMission(mission) {
      get(this, 'startMission')(mission);
    }
  }
});
