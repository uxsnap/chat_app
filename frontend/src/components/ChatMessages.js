import React from 'react';
import Message from './Message';
import Icon from './Icon';

export default ({
  messages = [],
  handleMessageClick
}) => {
  return (
    <ul className="chat-messages">{
      messages.length
        ? messages.map((message) => {
            return (
              <li
                key={'message_' + message.id} 
                className="chat-messages__message"
              >
                <Message
                  message={message}
                  handleMessageClick={handleMessageClick}
                />
              </li>
            );
          })
        : <div className="chat-messages__empty">
          <Icon name="nomessages"/>
        </div>
    }
    </ul>
  );
}
