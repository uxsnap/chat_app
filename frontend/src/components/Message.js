import React from 'react';
import DialogueItem from './DialogueItem';

export default ({
  message
}) => {
  return (
    <div className="message">
      <DialogueItem
        modification="message"
        photo={message.photo}
        name={message.name}
        date={message.date}
        lastMessage={message.message}
      />
    </div>
  );
}
