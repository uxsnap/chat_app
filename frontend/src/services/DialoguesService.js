import chatSocket from 'helpers/constants/chatSocket';

class DialoguesService {
  async searchUsers(value) {
    await chatSocket.emit('find_users', JSON.stringify({value}));
  }

  async fetchDialogues(userId) {
    await chatSocket.emit('fetch_dialogues', JSON.stringify({userId}));
  } 
}

export default DialoguesService; 
