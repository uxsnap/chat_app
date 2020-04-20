import React from 'react';
import formatDate from 'helpers/formatDate';
import capitalize from 'helpers/capitalize';
import Input from 'components/Input';
import Icon from 'components/Icon';
import DialogueItem from 'components/DialogueItem';

export default ({
  dialogues,
  searchValue,
  chooseMessage,
  setSearchValue,
  currentDialogue
}) => {
  const isEmpty = !dialogues.length;
  const dataToRender = () => dialogues
    .map((dialogue) => {
    return (
      <li className="chat-list__item">
        <DialogueItem
          key={'chat-list__item_' + dialogue.id}
          isActive={dialogue.id === currentDialogue}
          modification="chat-list"
          photo={dialogue.photo}
          title={capitalize(dialogue.name)}
          subtitle={formatDate(dialogue.date)}
          lastMessage={dialogue.message}
          onClick={() => chooseMessage(dialogue.id)}          
        />
      </li>
    )
  })
  return (
    <div className="chat-list">
      <div className="chat-list__search">
        <Input
          className="chat-list__input"
          name="chatList"
          value={searchValue}
          icon="searchlogo"
          onInput={(value) => setSearchValue(value)}
        />
      </div>
      <div className="chat-list__main">
        {!isEmpty
          ? dataToRender()
          : (
            <div className="chat-list-empty">
              <Icon name="nomessages"/>
              <div className="chat-list-empty__message">
                No messages(
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}