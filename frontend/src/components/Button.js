import styled from 'styled-components';
import React from 'react';

const DefaultButton = ({ className, children, click }) => {
  return (
    <button 
      className={className}
      onClick={click}
    >
      { children }
    </button>
  );
}

export const Button = styled(DefaultButton)`
  background: transparent;
  border: 0;
  outline: none;
`