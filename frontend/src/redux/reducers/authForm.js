export default (state = {
  isLogged: false,
  name: '',
  email: '',
  pass: '',
  isSubmit: false,
  type: 'form'
}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED':
      return {
        ...state,
        isLogged: action.logged
      }
    case 'UPDATE_FIELD':
      const { fieldType, value } = action;
      return {
        ...state,
        [fieldType]: value.trim()
      }
    case 'TOGGLE_SUBMIT':
      return {
        ...state,
      } 
    case 'CHANGE_TYPE':
      return {
        ...state,
        type: action.value
      }
    default:
      return state;
  }
} 