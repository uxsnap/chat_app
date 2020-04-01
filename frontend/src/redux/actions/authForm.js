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

export const submitAuth = (formType) => {
  return (dispatch) => {
    const { email, name, pass } = getState();
    const auth = new AuthService(email, name, pass);
    return dispatch(auth[formType]());
  }
}