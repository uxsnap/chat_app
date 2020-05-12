import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from './Icon';
 

const MessagePanel = ({
  addAsset,
  sendMessage
  // makePhoto,
  // handleStickers,
}) => {
  const [value, setMessageValue] = useState('');
  const [prevKey, setKey] = useState('');

  function innerSendMessage(val) {
    if (!val.length) return;
    sendMessage(val);
    setMessageValue('');
  }

  function checkSend(key) {
    if (key === 'Enter' && prevKey === 'Control')
      innerSendMessage(value);
    setKey(key);
    setTimeout(() => setKey(''), 100);
  }

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
          onKeyDown={($event) => checkSend($event.key)}
        ></textarea>
      </div>
      <div className="message-panel__send">
        <Button
          className="primary"
          onClick={() => innerSendMessage(value)}
        >
          <Icon name="mainlogo"/>
        </Button>
      </div>
    </div>
  );
}

export default MessagePanel;