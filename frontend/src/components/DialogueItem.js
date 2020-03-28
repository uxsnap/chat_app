import React from 'react';
import styled from 'styled-components';

const DefaultDialogueItem = ({
    modification = '',
    photo = 'img/default_photo.png',
    title,
    lastMessage
  }) => {
  return (
    <div className={`dialogue-item ${modification.length ? `dialogue-item_${modification}` : ''}`}>
      <div className="dialogue-item__photo">
        <img src={photo} alt="Photo"/>
      </div>
      <header className="dialogue-item__header">
        <h1 className="dialogue-item__title">
          { title }
        </h1>
      </header>
      <main className="dialogue-item__main">
        <p className="dialogue-item__last-message">
          { lastMessage }
        </p>
      </main>
    </div>
  );
}

export const DialogueItem = styled(DefaultDialogueItem)`
  background: transparent;
  border: 1px solid black;
  display: flex;
`

