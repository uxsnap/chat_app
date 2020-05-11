import { v4 as uuidv4 } from 'uuid';
import DialoguesService from 'services/DialoguesService';

export const addDialogueItem = ({
  photo,
  name,
  date,
  lastMessage
}) => ({
  type: 'ADD_DIALOGUE_ITEM',
  id: uuidv4(),
  photo,
  name,
  date,
  message: lastMessage
});

export const removeDialogueItem = ({
  id
}) => ({
  type: 'REMOVE_DIALOGUE_ITEM',
  id
});

export const chooseMessage = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_DIALOGUE_ACTIVE', id });
    const { messages } = getState().chatList.dialogues.find(d => d.id === id);
    dispatch({
      type: 'MESSAGES',
      messages
    });
  }
};

export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    users
  }
};

export const addDialogues = (dialogues) => ({
  type: "ADD_DIALOGUES",
  dialogues
});

export const openDialogue = (userId, id) => {
  return async (dispatch, getState) => {
    const dialogue = new DialoguesService();
    await dialogue.openDialogue(userId, id);
    const { messages } = getState().dialogues.find(d => d.id === id);
    dispatch({
      type: 'MESSAGES',
      messages
    });
  }
}

export const fetchDialogues = (userId) => {
  return async (dispatch) => {
    const dialogue =  new DialoguesService();
    const res = await dialogue.fetchDialogues(userId);
    dispatch({type: ''});
  }
}

export const searchUsers = (value) => {
  return async (dispatch) => {
    const dialogue = new DialoguesService();
    const res = await dialogue.searchUsers(value);
    dispatch({type: ''});
  }
}

export const clearUsers = () => ({type: "CLEAR_USERS"});
