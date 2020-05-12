import React, {
  useEffect,
  useState
} from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Button from 'components/Button';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

const AuthForm = ({
  socket,
  name = '',
  email = '',
  pass = '',
  logo = '',
  error = '',
  updateField,
  submitAuth,
  handleAuthAction,
  setError
}) => {
  const [_, setCookie] = useCookies(['user_id']);
  const history = useHistory();

  useEffect(() => {
    socket.on('submitted', (data) => {
      const { res, type, _id } = JSON.parse(data);
      if (res.status !== 200) {
        setError(res.message);
        return;
      } else {
        switch (type) {
          case 'REGISTRATION':
            setFormType('login');
          case 'LOGIN':
            history.push('/');
            updateField('userId', _id);
            setCookie('user_id', _id);
         // TODO: Forgot pass 
        }
      }
      handleAuthAction(type);
    });
  }, []);

  const [formType, setFormType] = useState('login');

  return (
    <div className="auth-form">
      <img
        src={logo}
        alt="Main logo"
        className="auth-form__logo main-logo"
      />
      <form
        className="auth-form__form"
        id="chatForm"
        onSubmit={($event) => {
          $event.preventDefault();
          
          submitAuth(formType);
        }}
      >
      {formType === 'register' &&
        <Input
          className="auth-form__name"
          placeholder="Input your name"
          title="Name: "
          value={name}
          error={''}
          name="name"
          onInput={(value) => updateField('name', value)}
        />
      }  
        <Input
          className="auth-form__email"
          placeholder="Input your email"
          title="Email: "
          value={email}
          error={''}
          name="email"
          onInput={(value) => updateField('email', value)}
        />
      {formType !== 'forgotPass' &&
        <Input
          className="auth-form__pass"
          placeholder="Input your password"
          title="Password: "
          value={pass}
          error={''}
          type="password"
          name="pass"
          onInput={(value) => updateField('pass', value)}
        />
      }
        <Button 
          className="auth-form__submit"
          mod="primary"
          type="submit"
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
