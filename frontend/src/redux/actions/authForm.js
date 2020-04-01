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

export const submitAuth = (formType) => {
  return (dispatch, getState) => {
    console.log('here');
    const { email, name, pass } = getState();
    const auth = new AuthService(email, name, pass);
    return auth[formType]()
      .then(() => dispatch(toggleSubmit()));
  }
}