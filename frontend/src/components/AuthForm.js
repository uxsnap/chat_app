import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';

const AuthForm = ({
  formType = 'login',
  name = '',
  email = '',
  pass = '',
  nameError = '',
  mailError = '',
  passError = '',
  updateField 
}) => {
  return (
    <div className="auth-form">
      <form
        className="auth-form__form"
        id="chatForm"
      >
      {formType === 'register' &&
        <Input
          className="auth-form__name"
          placeholder="Input your name"
          title="Name"
          value={name}
          error={nameError}
          onChange={() => updateField('name', $event.target.value)}
        />
      }  
        <Input
          className="auth-form__email"
          placeholder="Input your email"
          title="Email"
          value={email}
          error={mailError}
          onChange={() => updateField('email', $event.target.value)}
        />
      {formType !== 'forgotPass' &&
        <Input
          className="auth-form__pass"
          placeholder="Input your password"
          title="Password"
          value={pass}
          error={passError}
          onChange={() => updateField('pass', $event.target.value)}
        />
      }
        <Button 
          className="auth-form__submit"
        >Submit</Button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  formType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  nameError: PropTypes.string.isRequired,
  mailError: PropTypes.string.isRequired,
  passError: PropTypes.string.isRequired,
  updateField: PropTypes.func.isRequired
};

export default AuthForm;