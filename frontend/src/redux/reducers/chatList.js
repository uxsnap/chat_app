import mario from 'assets/images/mario.png';

const initialState = {
  dialogues: [
    // {
    //   id: 1,
    //   name: 'me',
    //   photo: mario,
    //   date: new Date(),
    //   message: 'Hello'
    // }
  ],
  foundUsers: [],
  currentDialogue: '',
  searchValue: ''
};

export default (state = 
  initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        foundUsers: action.users
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        foundUsers: []
      }
    case 'ADD_DIALOGUES':
      const { dialogues } = action;
      return {
        ...state,
        dialogues
      }
    case 'ADD_DIALOGUE_ITEM':
      return {
        ...state,
        dialogues: [
          ...state.dialogues,
          { 
            id: action.id,
            photo: action.photo,
            title: action.title,
            date: action.date,
            message: action.message,
          }
        ] 
      }
    case 'REMOVE_DIALOGUE_ITEM':
      return state.filter(
        item => item.id !== action.id
      )
    case 'SET_DIALOGUE_ACTIVE':
      return { ...state, currentDialogue: action.id } 
    default:
      return state;
  }
}
