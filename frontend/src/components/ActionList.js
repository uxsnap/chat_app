import React from 'react';
import styled from 'styled-components';

const DefaultActionList = ({children}) => {
  return (
    <ul className="action-list">
      {...children}
    </ul>
  );
}


export ActionList = styled(DefaultActionList)``;


