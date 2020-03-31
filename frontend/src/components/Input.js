import React, { useState } from 'react';
import classNames from 'classnames';

export default ({ 
  type = 'text',
  value,
  title = '',
  error = '',
  placeholder = 'Input something...',
  className = '',
  onInput
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
        onInput={($event) => {
          const { value } = $event.target;
          setValue(value);
          onInput(value)
        }}
      />
      {isError
        ? <span className="input__error">{error}</span>
        : ''
      }
    </label>
  );
}
