import React from 'react';
import Message from './Message';
import Icon from './Icon';

export default ({
  messages = [],
  handleMessageClick
}) => {
  <ul className="chat-messages">{
    messages.length
      ? messages.map((message) => {
          return (
            <Message
              key={'message_' + message.id}
              message={message}
              handleMessageClick={handleMessageClick}
            />
          );
        })
      : <div className="chat-messages__empty">
        <Icon name="nomessages"/>
      </div>
  }
  </ul>
}