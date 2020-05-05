import { connect } from 'react-redux';
import ChatWindow from 'components/ChatWindow';
import {
  addAsset,
  handleSearch,
  addUser,
  deleteUsers,
  deleteMessages,
} from 'actions/chatWindow';
import socket from 'helpers/constants/chatSocket';

const mapStateToProps = (state) => {
  const {
    currentDialogue,
    dialogues
  } = state.chatList;

  const { messageValue } = state.chatWindow;
  const curDialogue = dialogues.find(d => d.id === currentDialogue);
  return {
    messages: curDialogue ? curDialogue.messages : [],
    user: curDialogue ? { id: curDialogue.toUser, ...curDialogue.user} : null,
    socket,
    messageValue
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSearch: (value) => dispatch(handleSearch(value)),
  addUser: () => dispatch(addUser()),
  deleteUsers: () => dispatch(deleteUsers()),
  deleteMessages: () => dispatch(deleteMessages()),
  addAsset: () => dispatch(addAsset())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);