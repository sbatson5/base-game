import Ember from 'ember';

const {
  Service,
  set
} = Ember;

export default Service.extend({
  chatMessages: null,
  showMissionDialog: false,

  startConversation(messages) {
    set(this, 'chatMessages', messages);
    set(this, 'showMissionDialog', true);
  },

  endConversation() {
    set(this, 'showMissionDialog', false);
  }
});
