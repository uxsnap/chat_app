import { connect } from 'react-redux';
import {
  updateField
} from 'actions/authForm';
import AuthSevice from 'services/AuthSevice';
import AuthForm from 'components/AuthForm';

const mapStateToProps = state => ({
  const { name, email, password} = state.authForm;
  return {
    name,
    email,
    pass
  }
});

const mapDispatchToProps = dispatch => ({
  updateField: (fieldType, value) => dispatch(updateField(fieldType, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);