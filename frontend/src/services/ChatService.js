import chatSocket from 'helpers/constants/chatSocket';

export default class {
  constructor(dialogueId) {
    this.socket = chatSocket; 
    this.dialogueId = dialogueId;
  }

  async addMessage(text) {
    return await this.socket.emit('addMessage', 
      JSON.stringify({
        dialogueId: this.dialogueId,
        text
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