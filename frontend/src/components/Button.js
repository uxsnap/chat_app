import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ className = '', mod = '', children, onClick, type = '' }) => {
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
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  mod: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;