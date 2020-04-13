import AuthService from 'services/AuthService';

export const toggleLogged = logged => ({
  type: 'TOGGLE_LOGGED',
  logged
});

export const updateField = (fieldType, value) => ({
  type: 'UPDATE_FIELD',
  fieldType,
  value
});

export const toggleSubmit = () => ({
  type: 'TOGGLE_SUBMIT'
});

export const changeAuthType = (value) => ({
  type: 'CHANGE_TYPE',
  value
}) 

export const handleNewPass = (password) => {
  return (dispatch) => {
    const auth = new AuthService(null, null, pass);
    return auth.changePass()
      .then(() => dispatch(
        updateField('pass', password)
      )) 
  }
};

export const submitAuth = (formType) => {
  return (dispatch, getState) => {
    const { email, name, pass } = getState().authForm;
    const auth = new AuthService(email, name, pass);
    return auth[formType]()
      .then(() => dispatch(toggleSubmit()));
  }
}