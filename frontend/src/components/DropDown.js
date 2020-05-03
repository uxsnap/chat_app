import React from 'react';
import classNames from 'classnames';
import Asset from './Asset';

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
      {items.slice(0, size).map((item, ind) => {
        return (
          <li 
            key={'drop-down__item_' + item.id}
            className="drop-down__item"
            onClick={() => onClick(item)}
          >
            <Asset src={item.photo ? item.photo : ''} dummy={item.value}/>
            <span>{ item.value }</span>
          </li>
        );
      })}
    </ul>
  );
};


export default DropDown;
