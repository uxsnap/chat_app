import React from 'react';
import classNames from 'classnames';

export default ({ className, mod = '', children, onClick }) => {
  const modClass = mod.length
    ? `main-button_${mod}`
    : '';
  const buttonClasses = classNames({
    'main-button': true,
    [className]: true,
    [modClass]: true
  });
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      { children }
    </button>
  );
}