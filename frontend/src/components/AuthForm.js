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
  updateField 
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
          onInput={(value) => updateField('name', value)}
        />
      }  
        <Input
          className="auth-form__email"
          placeholder="Input your email"
          title="Email: "
          value={email}
          error={mailError}
          onInput={(value) => updateField('email', value)}
        />
      {formType !== 'forgotPass' &&
        <Input
          className="auth-form__pass"
          placeholder="Input your password"
          title="Password: "
          value={pass}
          error={passError}
          onInput={(value) => updateField('pass', value)}
        />
      }
        <Button 
          className="auth-form__submit"
          mod="primary"
        >Submit</Button>
      </form>
      <div className="auth-form__change-type">
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
  updateField: PropTypes.func.isRequired
};

export default AuthForm;