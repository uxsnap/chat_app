import React from 'react';
import classNames from 'classnames';

export default ({
  modification = '',
  photo = 'img/default_photo.png',
  title,
  isActive,
  lastMessage,
  onClick
}) => {
  const dialogueClassnames = classNames({
    'dialogue-item': true,
    [modification]: true,
    'dialogue-item_active': isActive
  });

  return (
    <div
      className={dialogueClassnames}
      onClick={onClick}
    >
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
