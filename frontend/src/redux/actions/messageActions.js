import { v4 as uuid4 } from 'uuid';
import ChatService from 'services/ChatService';

export const addMessage = (dialogueId, text) => ({
  type: "ADD_MESSAGE",
  dialogueId,
  text
});

export const deleteMessage = (dialogueId, messageId) => ({
  type: "DELETE_MESSAGE",
  messageId,
  dialogueId
});

export const editMessage = (dialogueId, messageId, text) => ({
  type: "EDIT_MESSAGE",
  dialogueId,
  messageId,
  text
});

export const catchError = (error) => ({
  type: "MESSAGE_ERROR",
  error
})


export const handleAddMessage = (dialogueId, text) => {
  return (dispatch) => {
    const service = new ChatService(dialogueId);
    service
      .addMessage(text)
      .then(() => dispatch(
        addMessage(dialogueId, text)
      ))
      .catch(() => catchError('Problem occured when sendind message'));   
  }
}


export const handleDeleteMessage = (dialogueId, messageId) => {
  return (dispatch) => {
    const service = new ChatService(dialogueId);
    service
      .deleteMessage(messageId)
      .then(() => dispatch(
        deleteMessage(dialogueId, messageId)
      ))
      .catch(() => catchError('Problem occured when deleting message'));   
  }
}

export const handleEditMessage = (dialogueId, messageId, text) => {
  return (dispatch) => {
    const service = new ChatService(dialogueId);
    service
      .editMessage(messageId, text)
      .then(() => dispatch(
        editMessage(dialogueId, messageId, text)
      ))
      .catch(() => catchError('Problem occured when editing message'));   
  }
}