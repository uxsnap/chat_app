import ChatService from 'services/ChatService';
import { setLastMessage } from 'actions/chatList';

export const handleSearch = (dialogueId, text) => ({
  type: "HANDLE_SEARCH",
  dialogueId,
  text
});

export const openMessages = (messages, toUser) => {
  return (dispatch, getState) => {
    const { foundUsers } = getState().chatList;
    const found = foundUsers.find(user => user.userId === toUser);
    dispatch({
      type: "OPEN_MESSAGES",
      toUser,
      messages,
      currentUser: found
    });
  }
};

export const sendMessage = (dialogueId, fromUser, mes) => {
  const chatService = new ChatService(dialogueId);
  return async (dispatch) => {
    const date = new Date();
    await chatService.sendMessage(fromUser, mes, date);
    const message = {
      message: mes,
      date,
      isMyMessage: true
    };
    dispatch({
      type: 'MESSAGE',
      message
    });
    dispatch(setLastMessage(dialogueId, message));   
  }
}

// export const addAsset = () => ({});
