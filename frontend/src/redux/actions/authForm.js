import AuthService from 'services/AuthService';

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
});

export const setFormType = (formType) => ({
  type: 'FORM_TYPE',
  formType
});

export const handleNewPass = (token, password) => {
  return (dispatch) => {
    const auth = new AuthService(null, null, pass);
    return auth.changePass(token)
      .then(() => dispatch(
        updateField('pass', password)
      )) 
  }
};

export const handleAuthAction = (authType) => ({
  type: 'AUTH_ACTION',
  authType
});

export const setError = (message) => ({
  type: 'SET_ERROR',
  message
});

export const submitAuth = (formType) => {
  return (dispatch, getState) => {
    const { email, name, pass } = getState().authForm;
    const auth = new AuthService(email, name, pass);
    return auth[formType]()
      .then(() => dispatch(toggleSubmit()));
  }
}