import React, { useState } from 'react';
import classNames from 'classnames';

const DefaultInput = ({ 
  type = 'text',
  value,
  title = '',
  error = '',
  placeholder = 'Input something...',
  className=''
}) => {
  const [stateValue, setValue] = useState('');
  const id = name + 'Input';
  const isError = error.length;
  "input" + (isError ? 'input_error' : '')
  const labelClasses = classNames({
    'input': true,
    'input_error': isError,
    [className]: true
  });
  const 
  return (
    <label
      htmlFor={id}
      className={labelClasses}
    >
      {title.length &&
        <span className="input__title">{title}</span>
      }
      <input
        className="input__input"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onInput={($event) => setValue($event.target.value)}
      />
      {isError &&
        <span className="input__error">{error}</span>}
    </label>
  );
} 