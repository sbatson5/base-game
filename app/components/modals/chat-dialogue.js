import Ember from 'ember';

const {
  Component,
  computed,
  computed: { alias, equal, filterBy, lte },
  get
} = Ember;

export default Component.extend({
  chatIndex: 0,

  chatMessages: null,

  currentChat: computed('chatIndex', 'chatMessages.[]', function() {
    let index = get(this, 'chatIndex');
    return get(this, 'chatMessages')[index];
  }),

  noRemainingMessages: computed('numberOfMessages', 'chatIndex', function() {
    return get(this, 'chatIndex') + 1 >= get(this, 'numberOfMessages');
  }),

  secondaryChat: filterBy('chatMessages', 'speaker', 'secondary'),
  noSecondary: lte('secondaryChat.length', 0),

  numberOfMessages: alias('chatMessages.length'),

  currentText: alias('currentChat.text'),
  currentSpeaker: alias('currentChat.speaker'),
  currentEmotion: alias('currentChat.emotion'),

  isPrimary: equal('currentSpeaker', 'primary'),
  isSecondary: equal('currentSpeaker', 'secondary'),

  actions: {
    stepForward() {
      this.incrementProperty('chatIndex');
    },

    closeModal() {
      get(this, 'hideModal')();
    }
  }
});
