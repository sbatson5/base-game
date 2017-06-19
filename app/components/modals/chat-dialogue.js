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
      text: 'This is the first message',
      emotion: 'happy'
    }, {
      speaker: 'secondary',
      text: 'And this is second',
      emotion: 'sad'
    }, {
      speaker: 'primary',
      text: 'Do not do that!',
      emotion: 'angry'
    }, {
      speaker: 'secondary',
      text: 'What a big mistake!!',
      emotion: 'scared'
    }
  ],

  currentChat: computed('chatIndex', 'chatMessages.[]', function() {
    let index = get(this, 'chatIndex');
    return get(this, 'chatMessages')[index];
  }),

  currentText: alias('currentChat.text'),
  currentSpeaker: alias('currentChat.speaker'),

  isPrimary: equal('currentSpeaker', 'primary'),
  isSecondary: equal('currentSpeaker', 'secondary'),

  actions: {
    stepForward() {
      this.incrementProperty('chatIndex');
    }
  }
});
