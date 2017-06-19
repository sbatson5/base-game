import Ember from 'ember';

const {
  Component,
  computed,
  computed: { alias, equal },
  get
} = Ember;

export default Component.extend({
  chatIndex: 0,

  chatMessages: [
    {
      speaker: 'primary',
      text: 'I am so happy about the things that are happening right now!',
      emotion: 'happy'
    }, {
      speaker: 'secondary',
      text: 'Oh no... I ate a burrito and it isn\'t sitting well... Maybe I will have some of this warm milk.',
      emotion: 'sad'
    }, {
      speaker: 'primary',
      text: 'Do not do that!',
      emotion: 'angry'
    }, {
      speaker: 'secondary',
      text: 'What a big mistake!!',
      emotion: 'angry'
    }
  ],

  currentChat: computed('chatIndex', 'chatMessages.[]', function() {
    let index = get(this, 'chatIndex');
    return get(this, 'chatMessages')[index];
  }),

  currentText: alias('currentChat.text'),
  currentSpeaker: alias('currentChat.speaker'),
  currentEmotion: alias('currentChat.emotion'),

  isPrimary: equal('currentSpeaker', 'primary'),
  isSecondary: equal('currentSpeaker', 'secondary'),

  actions: {
    stepForward() {
      this.incrementProperty('chatIndex');
    }
  }
});
