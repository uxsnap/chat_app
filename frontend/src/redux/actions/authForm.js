export const toggleLogged = logged => ({
  type: 'TOGGLE_LOGGED',
  logged
});

export const updateField = (fieldType, value) => ({
  type: 'UPDATE_FIELD',
  fieldType,
  value
});