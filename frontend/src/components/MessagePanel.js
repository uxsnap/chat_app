import React, { useState } from 'react';
import Button from './Button';
import Icon from './Icon';
 

const MessagePanel = ({
  addAsset,
  sendMessage
  // makePhoto,
  // handleStickers,
}) => {
  const [value, setMessageValue] = useState('');
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
          onClick={() => value.length && sendMessage(value) && setMessageValue('')}
        >
          <Icon name="mainlogo"/>
        </Button>
      </div>
    </div>
  );
}

export default MessagePanel;