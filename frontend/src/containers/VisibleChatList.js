import { connect } from 'react-redux';
import {
  addDialogueItem,
  removeDialogueItem,
  chooseMessage,
  searchUsers,
  addUsers
} from 'actions/chatList'; 
import ChatList from 'components/ChatList';
import socket from 'helpers/constants/chatSocket';

const mapStateToProps = (state) => {
  const { dialogues, currentDialogue, foundUsers} = state.chatList;
  return {
    socket,
    dialogues,
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
  openDialogue: (item) => dispatch(openDialogues(item)),
  addUsers: (users) => dispatch(addUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);