import React from 'react';
import DialogueItem from './DialogueItem';
import Icon from './Icon';
import formatDate from 'helpers/formatDate';

export default ({
  message = null
}) => {
  return (
    <div
      className={"message " + (
        message.isMyMessage
          ? 'message_current-user'
          : ''
      )}>
      <DialogueItem
        photo={message.photo}
        title={message.name}
        subtitle={formatDate(message.date)}
        lastMessage={message.message}
      />
      <div className="message__control">
        <Icon
          name="dots"
        />
      </div>
    </div>
  );
}
