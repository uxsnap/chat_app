import { connect } from 'react-redux';
import {
  addDialogueItem,
  removeDialogueItem,
  chooseMessage,
  searchUsers,
  addUsers,
  addDialogues,
  openDialogue,
  fetchDialogues
} from 'actions/chatList'; 
import { openMessages } from 'actions/chatWindow';
import ChatList from 'components/ChatList';
import socket from 'helpers/constants/chatSocket';

const mapStateToProps = (state) => {
  const {
    dialogues,
    currentDialogue,
    foundUsers
  } = state.chatList;
  const { userId } = state.authForm;
  return {
    socket,
    dialogues,
    userId,
    currentDialogue,
    foundUsers
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDialogueItem: (photo, title, lastMessage) => dispatch(addDialogueItem(photo, title, lastMessage)),
  removeDialogueItem: (id) => dispatch(removeDialogueItem(id)),
  chooseMessage: (id) => dispatch(chooseMessage(id)),
  setSearchValue: (value) => dispatch(setSearchValue(value)),
  searchUsers: (value) => dispatch(searchUsers(value)),
  openDialogue: (userId, id) => dispatch(openDialogue(userId, id)),
  openMessages: (messages) => dispatch(openMessages(messages)),
  fetchDialogues: (userId) => dispatch(fetchDialogues(userId)),
  addUsers: (users) => dispatch(addUsers(users)),
  addDialogues: (dialouges) => dispatch(addDialogues(dialogues)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
