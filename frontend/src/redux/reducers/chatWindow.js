const initialState = {
  messages: [],
  assets: [],
  searchValue: '',
  currentUser: null,
  messageValue: ''
};

export default (state = initialState, action) => {
 switch (action.type) {
   case "OPEN_MESSAGES":
     return {
        ...state,
       messages: action.messages,
       toUser: action.toUser,
       currentUser: action.currentUser
     }
   case "MESSAGE":
     return {
       ...state,
       messages: [...state.messages, action.message]
     }
   case "MESSAGES":
     return {
       ...state,
       messages: action.messages
     }
   case "HANDLE_SEARCH":
     return {
       ...state,
       searchValue: action.text
     }
   default:
     return state;
 }
}
