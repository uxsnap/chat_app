import { combineReducers } from 'redux';
import chatList from './chatList';
import chatWindow from './chatWindow';
import authForm from './authForm';

export default combineReducers({
  chatList,
  authForm,
  chatWindow
});
