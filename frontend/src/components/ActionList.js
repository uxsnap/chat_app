import React from 'react';
import DropDown from './DropDown';

const ActionList = ({
  items = [],
  onClick
}) => {
  return (
    <div className="action-list">
      <DropDown
        items={items}
        onClick={onClick}
      />
    </div>
  );
}

export default ActionList;