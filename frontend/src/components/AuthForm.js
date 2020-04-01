import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Button from 'components/Button';

const AuthForm = ({
  name = '',
  email = '',
  pass = '',
  nameError = '',
  mailError = '',
  passError = '',
  logo = '',
  updateField,
  submitAuth
}) => {
  const [formType, setFormType] = useState('login');
  return (
    <div className="auth-form">
      <img
        src={logo}
        alt="Main logo"
        className="auth-form__logo"
      />
      <form
        className="auth-form__form"
        id="chatForm"
      >
      {formType === 'register' &&
        <Input
          className="auth-form__name"
          placeholder="Input your name"
          title="Name: "
          value={name}
          error={nameError}
          name="name"
          onInput={(value) => updateField('name', value)}
        />
      }  
        <Input
          className="auth-form__email"
          placeholder="Input your email"
          title="Email: "
          value={email}
          error={mailError}
          name="email"
          onInput={(value) => updateField('email', value)}
        />
      {formType !== 'forgotPass' &&
        <Input
          className="auth-form__pass"
          placeholder="Input your password"
          title="Password: "
          value={pass}
          error={passError}
          type="password"
          name="pass"
          onInput={(value) => updateField('pass', value)}
        />
      }
        <Button 
          className="auth-form__submit"
          mod="primary"
          onClick={() => {
            submitAuth(formType);
            return false;
          }}
        >Submit</Button>
      </form>
      <div className="auth-form__change-type">
        {formType !== 'login' &&
          <Button mod="inverse" onClick={() => setFormType('login')}>Login</Button>}
        {formType !== 'register' &&
          <Button mod="inverse" onClick={() => setFormType('register')}>Register</Button>}
        {formType !== 'forgotPass' &&
          <Button mod="inverse" onClick={() => setFormType('forgotPass')}>Forgot password</Button>}
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  formType: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  nameError: PropTypes.string,
  mailError: PropTypes.string,
  passError: PropTypes.string,
  updateField: PropTypes.func.isRequired,
  submitAuth: PropTypes.func.isRequired
};

export default AuthForm;