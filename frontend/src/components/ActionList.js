import React from 'react';

const DefaultActionList = ({children}) => {
  return (
    <ul className="action-list">
      {...children}
    </ul>
  );
}


export ActionList = styled(DefaultActionList)``;


