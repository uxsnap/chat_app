import React from 'react';

export default ({ name, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={"icon icon-" + name}
    ></span>
  );
}

