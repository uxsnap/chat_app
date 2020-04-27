import React from 'react';
import classNames from 'classnames';

const DropDown = ({
  items = [],
  className,
  onClick,
  size = 10
}) => {
  const dropDownClassNames = classNames({
    [className]: true,
    'drop-down': true
  });

  return (
    <ul className={dropDownClassNames}>
      {items.slice(1, size).map((item, ind) => {
        return (
          <li 
            key={'drop-down__item_' + item.id}
            className="drop-down__item"
            onClick={onClick}
          >{ item.value }</li>
        );
      })}
    </ul>
  );
};


export default DropDown;