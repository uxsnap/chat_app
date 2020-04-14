import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { toggleLogged } from 'actions/authForm';
import socket from 'helpers/api';
import Chat from 'containers/Chat';
import VisibleAuthForm from 'containers/VisibleAuthForm';
import VisibleResetPass from 'containers/VisibleResetPass';
import {
  Switch,
  Route
} from "react-router-dom";

const App = ({ isLogged }) => {
  return (
    <Switch>
      <Route
        path="/auth/forgot/:token"
        component={VisibleResetPass}
      />
      <Route path="/auth" component={VisibleAuthForm} />
      <Route path="/" component={Chat}/>
    </Switch>
  );
}

const mapStateToProps = state => ({ 
  isLogged: state.authForm.isLogged
});

App.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App);