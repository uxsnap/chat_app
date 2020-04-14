export default (state = {
  isLogged: false,
  name: '',
  email: '',
  pass: '',
  isSubmit: false,
  formType: 'login',
  type: 'form'
}, action) => {
  switch (action.type) {
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
    case 'AUTH_ACTION':
      switch (action.authType) {
        case 'LOGIN':
          return {
            ...state,
            isLogged: true
          }
        case 'REGISTRATION':
        case 'FORGOT_PASS':
          return {
            ...state,
            formType: 'login'
          }
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.message
      }
    default:
      return state;
  }
} 