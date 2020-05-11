import { connect } from 'react-redux';
import ChatWindow from 'components/ChatWindow';
import {
  addAsset,
  handleSearch,
  addUser,
  deleteUsers,
  deleteMessages,
  sendMessage
} from 'actions/chatWindow';
import socket from 'helpers/constants/chatSocket';

const mapState = (state) => {
  const {
    currentDialogue,
    dialogues
  } = state.chatList;

  const { messageValue, messages } = state.chatWindow;
  const curDialogue = dialogues.find(d => d.id === currentDialogue);
  return {
    socket,
    dialogueId: currentDialogue,
    messages,
    user: curDialogue ? { id: curDialogue.toUser, ...curDialogue.user} : null,
    socket,
    messageValue
  }
}

const mapDispatch = (dispatch) => ({
  handleSearch: (value) => dispatch(handleSearch(value)),
  addUser: () => dispatch(addUser()),
  deleteUsers: () => dispatch(deleteUsers()),
  deleteMessages: () => dispatch(deleteMessages()),
  addAsset: () => dispatch(addAsset()),
  sendMessage: (dialogueId, fromUser, value) => dispatch(sendMessage(dialogueId, fromUser, value))
});

export default connect(mapState, mapDispatch)(ChatWindow);