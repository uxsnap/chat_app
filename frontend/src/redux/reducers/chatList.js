export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_DIALOGUE_ITEM':
      return [
        ...state,
        { 
          id: action.id,
          photo: action.photo,
          title: action.title,
          message: action.message,
          isActive: false
        }
      ]
    case 'REMOVE_DIALOGUE_ITEM':
      return state.filter(
        item => item.id !== action.id
      )
    case 'SET_DIALOGUE_ACTIVE':
      return state.map(
        item => ({ ...item, isActive: item.id === action.id})
      );
    default:
      return state;
  }
}