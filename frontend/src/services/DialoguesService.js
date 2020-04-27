import chatSocket from 'helpers/constants/chatSocket';

class DialoguesService {
  async searchUsers(value) {
    await chatSocket.emit('find_users', JSON.stringify({value}));
  }
}

export default DialoguesService; 