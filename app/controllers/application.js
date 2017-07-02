import Ember from 'ember';

const {
  Controller,
  computed: { alias },
  get,
  inject: { service }
} = Ember;

export default Controller.extend({
  conversationManager: service(),

  showMissionDialog: alias('conversationManager.showMissionDialog'),
  chatMessages: alias('conversationManager.chatMessages')
});
