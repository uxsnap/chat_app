import { combineReducers } from 'redux';
import chatList from './chatList';
import authForm from './authForm';

export default combineReducers({
  chatList,
  authForm
});