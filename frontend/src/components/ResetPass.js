import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import { useHistory } from 'react-router-dom'; 

const ResetPass = ({
  token = null,
  title = '',
  logo = '',
  error = '',
  handleNewPass,
  socket
}) => {
  const [newPass, setNewPass] = useState('');
  const history = useHistory();

  useEffect(() => {
    socket.on('auth:passChanged', (data) => {
      const { res, type } = JSON.parse(data);
      if (type === 'PASS_CHANGED' &&
        res.status === 200)
        history.push('/auth');
    });
  }, []);

  return (
    <div className="reset-pass">
      <img
        src={logo}
        alt="Main logo"
        className="reset-pass__logo main-logo"
      />
      <div className="reset-pass__title">
        { title }
      </div>
      <div className="reset-pass__input">
        <Input
          value={newPass}
          title="Input new password"
          type="password"
          onInput={value => setNewPass(value)}
        />
      </div>
      <div className="reset-pass__button">
        <Button
          onClick={() => handleNewPass(token, newPass)}
        >Change Pass</Button>
      </div>
    </div>
  );
}

export default ResetPass;