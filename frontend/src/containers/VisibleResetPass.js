import { connect } from 'react-redux';
import {
  handleNewPass
} from 'actions/authForm';
import mainLogo from 'images/mainLogo.svg';
import ResetPass from 'components/ResetPass';
import socket from 'helpers/api';

const mapStateToProps = state => {
  const { resetPassTitle } = state.authForm;
  return {
    socket,
    logo: mainLogo,
    title: resetPassTitle
  }
};

const mapDispatchToProps = dispatch => ({
  handleNewPass: (newPass) => dispatch(handleNewPass(newPass))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPass);