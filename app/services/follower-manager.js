import Ember from 'ember';

const {
  Service,
  computed: { mapBy },
  get,
  set
} = Ember;

export default Service.extend({
  followers: null,

  currentOccupations: mapBy('followers', 'occupation'),

  setFollowers(followerArray) {
    set(this, 'followers', followerArray)
  },

  getFollowerByOccupation(occupation) {
    return get(this, 'followers').findBy('occupation', occupation);
  },

  killFollower(follower) {
    let occupation = get(follower, 'occupation');
    this.getFollowerByOccupation(occupation).destroyRecord();
  }
});
