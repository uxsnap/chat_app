import React from 'react';
import { connect } from 'react-redux';
import VisibleAuthForm from './VisibleAuthForm';
import VisibleResetPass from './VisibleResetPass';

export default connect(
  () => {type: state.authForm.type}
)(
  ({ type = 'form' }) => {
    const currentContainer = type === 'form'
      ? <VisibleAuthForm />
      : <VisibleResetPass />
    return (
      <div className="auth">
        {currentContainer}
      </div>
    );
  }
)