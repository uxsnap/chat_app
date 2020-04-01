import { connect } from 'react-redux';
import {
  updateField,
  submitAuth
} from 'actions/authForm';
import AuthService from 'services/AuthService';
import AuthForm from 'components/AuthForm';
import mainLogo from 'images/mainLogo.svg';

const mapStateToProps = state => {
  const { name, email, pass} = state.authForm;
  return {
    logo: mainLogo,
    name,
    email,
    pass
  }
};

const mapDispatchToProps = dispatch => ({
  updateField: (fieldType, value) => dispatch(updateField(fieldType, value)),
  submitAuth: (formType) => dispatch(submitAuth(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);