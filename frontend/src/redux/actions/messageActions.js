import { v4 as uuid4 } from 'uuid';

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


export const handleAddMessage = (dialogueId, text) => {
  return (dispatch) => {

  }
}
