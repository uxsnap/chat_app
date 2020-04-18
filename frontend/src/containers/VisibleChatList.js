import { connect } from 'react-redux';
import {
  addDialogueItem,
  removeDialogueItem,
  chooseMessage,
  setSearchValue
} from 'actions/chatList'; 
import ChatList from 'components/ChatList';

const mapStateToProps = (state) => {
  const { dialogues, searchValue, currentDialogue} = state.chatList;
  return {
    dialogues,
    searchValue,
    currentDialogue
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDialogueItem: (photo, title, lastMessage) => dispatch(addDialogueItem(photo, title, lastMessage)),
  removeDialogueItem: (id) => dispatch(removeDialogueItem(id)),
  chooseMessage: (id) => dispatch(chooseMessage(id)),
  setSearchValue: (value) => dispatch(setSearchValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);