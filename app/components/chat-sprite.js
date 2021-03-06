import Ember from 'ember';

const {
  Component,
  computed,
  computed: { equal },
  get
} = Ember;

export default Component.extend({
  classNames: ['chat-sprite'],
  classNameBindings: [
    'isFocused:focus:not-focused',
    'isAngry:emotion--angry',
    'isSad:emotion--sad',
    'isHappy:emotion--happy',
    'isPrimary',
    'isSecondary'
  ],

  isFocused: computed('currentChat.speaker', 'speaker', function() {
    return get(this, 'currentChat.speaker') === get(this, 'speaker');
  }),

  currentEmotion: computed('currentChat.{speaker,emotion}', 'speaker', function() {
    let speaker = get(this, 'speaker');
    if (get(this, 'currentChat.speaker') === speaker) {
      return get(this, 'currentChat.emotion');
    }
  }),

  isAngry: equal('currentEmotion', 'angry'),
  isSad: equal('currentEmotion', 'sad'),
  isHappy: equal('currentEmotion', 'happy'),
  isPrimary: equal('speaker', 'primary'),
  isSecondary: equal('speaker', 'secondary')
});
