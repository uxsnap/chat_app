import { connect } from 'react-redux';
import {
  addDialogueItem,
  removeDialogueItem,
  chooseMessage,
  searchUsers
} from 'actions/chatList'; 
import ChatList from 'components/ChatList';

const mapStateToProps = (state) => {
  const { dialogues, currentDialogue, foundUsers} = state.chatList;
  return {
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
  openDialogue: (item) => dispatch(openDialogues(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);