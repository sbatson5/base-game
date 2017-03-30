import Ember from 'ember';

const {
  Service,
  computed: { mapBy },
  set
} = Ember;

export default Service.extend({
  followers: null,

  currentOccupations: mapBy('followers', 'occupation'),

  setFollowers(followerArray) {
    set(this, 'followers', followerArray)
  }
});
