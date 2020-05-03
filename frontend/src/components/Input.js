import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Icon from 'components/Icon';

const Input = ({ 
  type = 'text',
  value = '',
  title = '',
  error = '',
  placeholder = 'Input something...',
  className = '',
  icon = '',
  name,
  onInput
}) => {
  const [stateValue, setValue] = useState(value);
  const id = name + 'Input';
  const isError = error.length;
  "input" + (isError ? 'input_error' : '')
  const labelClasses = classNames({
    'input': true,
    'input_error': isError,
    [className]: true
  });

  useEffect(() => setValue(value), [value]);
  
  return (
    <label
      htmlFor={id}
      className={labelClasses}
    >
      {title.length ?
        <span className="input__title">{title}</span>
        : ''
      }
      <input
        className="input__input"
        type={type}
        name={name}
        id={id}
        value={stateValue}
        placeholder={placeholder}
        onChange={($event) => {
          const curValue = $event.target.value;
          setValue(curValue);
          onInput(curValue)
        }}
      />
      {icon.length
        ? <span className="input__icon"><Icon name={icon}/></span>
        : ''
      }
      {isError
        ? <span className="input__error">{error}</span>
        : ''
      }
    </label>
  );
}

export default Input;
