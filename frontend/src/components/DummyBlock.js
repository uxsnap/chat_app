import React from 'react';
import Icon from './Icon';

const DummyBlock = ({ icon, info }) => {
  return (
    <div className="dummy-block">
      <div className="dummy-block__icon">
        <Icon name={icon}/>
      </div>
      <div className="dummy-block__info">
        { info }
      </div>
    </div>
  );
}

export default DummyBlock;
