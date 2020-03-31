import React from 'react';
import Icon from './Icon';

const DefaultDummyBlock = ({ icon, info }) => {
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

export const DummyBlock = styled(DefaultDummyBlock)`
  color: grey;
`