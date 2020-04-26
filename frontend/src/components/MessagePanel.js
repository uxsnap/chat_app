import React, { useState } from 'react';
import Button from './Button';
import Icon from './Icon';

export default ({
  messageValue = '',
  addAsset,
  // makePhoto,
  // handleStickers,
  // sendMessage
}) => {
  const [value, setMessageValue] = useState(messageValue);
  return (
    <div className="message-panel">
      {/* TODO Add options panel */}
      {/*<div className="message-panel__options"></div>*/}
      <div className="message-panel__message">
        <textarea
          name="messagePanel"
          id="messagePanel"
          value={value}
          onChange={($event) => setMessageValue($event.target.value)}
        ></textarea>
      </div>
      <div className="message-panel__send">
        <Button
          className="primary"
          onClick={() => sendMessage(value)}
        >
          <Icon name="mainlogo"/>
        </Button>
      </div>
    </div>
  );
}
