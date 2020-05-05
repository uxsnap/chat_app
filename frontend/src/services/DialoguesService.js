import chatSocket from 'helpers/constants/chatSocket';

class DialoguesService {
  async openDialogue(userId, id) {
    await chatSocket.emit('open_dialogue', JSON.stringify({ userId, id }));
  }

  async searchUsers(value) {
    // TODO: Don't search for yourself
    await chatSocket.emit('find_users', JSON.stringify({value}));
  }

  async fetchDialogues(userId) {
    await chatSocket.emit('fetch_dialogues', JSON.stringify({userId}));
  } 
}

export default DialoguesService; 
