import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service },
  set
} = Ember;

export default Controller.extend({
  isSelectingFollower: false,
  selectedMission: null,
  showToolModal: false,
  conversationManager: service(),

  actions: {
    updateResource(resource, value) {
      let currentAmount = get(this, `resources.${resource}`);
      value += currentAmount;
      if (value < 0) {
        alert("not enough resources");
      } else {
        set(this, `resources.${resource}`, value);
      }
    },

    displayChatModal() {
      let chatMessages = [
        {
          speaker: 'primary',
          text: 'I am so super happy about the things that are happening right now!',
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
      ];
      // set(this, 'showChat', true);
      get(this, 'conversationManager').startConversation(chatMessages);
    },

    hideToolModal() {
      set(this, 'showToolModal', false);
    }
  }
});
