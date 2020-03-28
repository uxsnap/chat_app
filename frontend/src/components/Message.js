import React from 'react';
import { DialogueItem } from './DialogueItem';

const DefaultMessage = ({ children, photo, title }) => {
  return (
    <div className="message">
      <DialogueItem
        modification="message"
        photo={photo}
        title={title}
        lastMessage={children}
      />
    </div>
  );
}

export const Message = styled(DefaultMessage)``;