import React from 'react';
import VisibleChatList from './VisibleChatList';
import VisibleChatWindow from './VisibleChatWindow';

export default () => {
  return (
    <div className="chat">
      <VisibleChatList />
      <VisibleChatWindow />
    </div>
  );
};
