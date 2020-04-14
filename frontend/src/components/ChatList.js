import React from 'react';
import Input from './Input';

export default ({}) => {
  return (
    <div className="chat-list">
      <div className="chat-list__search">
        <Input />
      </div>
      <div className="chat-list__main"></div>
    </div>
  );
}