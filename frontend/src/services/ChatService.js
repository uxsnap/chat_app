import chatSocket from 'helpers/constants/chatSocket';

class ChatService {
  constructor(dialogueId) {
    this.socket = chatSocket; 
    this.dialogueId = dialogueId;
  }

  async sendMessage(fromUser, message) {
    return await this.socket.emit('message:send', 
      JSON.stringify({
        dialogueId: this.dialogueId,
        fromUser,
        message
      })
    );
  }

  async deleteMessage(messageId) {
    return await this.socket.emit('deleteMessage',
      JSON.stringify({
        dialogueId: this.dialogueId,
        messageId
      })
    )
  }

  async editMessage(messageId, newText) {
    return await this.socket.emit('editMessage', 
      JSON.stringify({
        dialogueId: this.dialogueId,
        messageId,
        text: newText
      })
    )
  }
}

export default ChatService;