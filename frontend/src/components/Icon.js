import React from 'react';

const Icon = ({ name, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={"icon icon-" + name}
    ></span>
  );
}

export default Icon;