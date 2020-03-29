import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { toggleLogged } from 'actions/authForm';
import VisibleAuthForm from 'containers/VisibleAuthForm'; 
import Chat from 'containers/Chat'; 

const App = ({ isLogged }) => {
  if (isLogged)
    return <Chat />;
  return <VisibleAuthForm />;
}

const mapState = state => ({ 
  isLogged: state.authForm.isLogged
});

App.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

export default connect(mapState)(App);