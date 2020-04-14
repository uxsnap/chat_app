import { connect } from 'react-redux';
import {
  updateField,
  submitAuth
} from 'actions/authForm';
import AuthService from 'services/AuthService';
import AuthForm from 'components/AuthForm';
import mainLogo from 'images/mainLogo.svg';
import socket from 'helpers/api';

const mapStateToProps = state => {
  const { name, email, pass} = state.authForm;
  return {
    socket,
    logo: mainLogo,
    name,
    email,
    pass
  }
};

const mapDispatchToProps = dispatch => ({
  updateField: (fieldType, value) => dispatch(updateField(fieldType, value)),
  submitAuth: (formType) => dispatch(submitAuth(formType)),
  handleAuthAction: (authType) => dispatch(handleAuthAction(authType)),
  setError: (message) => dispatch(setError(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);