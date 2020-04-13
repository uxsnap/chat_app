import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default ({
  title = '',
  logo = '',
  error = '',
  handleNewPass
}) => {
  const [newPass, setNewPass] = useState('');

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
          onClick={() => handleNewPass(newPass)}
        >Change Pass</Button>
      </div>
    </div>
  );
}