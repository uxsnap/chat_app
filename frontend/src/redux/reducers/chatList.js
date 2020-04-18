const initialState = {
  dialogues: [],
  currentDialogue: '',
  searchValue: ''
};

export default (state = 
  initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.value
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