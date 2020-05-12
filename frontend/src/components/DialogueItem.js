import React from 'react';
import classNames from 'classnames';
import Asset from './Asset';

const DialogueItem = ({
  modification = '',
  photo = '',
  title,
  subtitle = '',
  isActive,
  lastMessage,
  onClick
}) => {
  const dialogueClassnames = classNames({
    'dialogue-item': true,
    ['dialogue-item_' + modification]: true,
    'dialogue-item_active': isActive
  });

  return (
    <div
      className={dialogueClassnames}
      onClick={onClick}
    >
      <div className="dialogue-item__photo">
        <Asset src={photo}/>
      </div>
      <main className="dialogue-item__main">
        <header className="dialogue-item__header">
          <h1 className="dialogue-item__title">
            { title }
          </h1>
          {subtitle.length
            ? <h2 className="dialogue-item__subtitle">{subtitle}</h2>
            : ''
          }
        </header>
        <p className="dialogue-item__last-message">
          { lastMessage }
        </p>
      </main>
    </div>
  );
}

export default DialogueItem;
