import React from 'react';
import formatMessage from 'helpers/formatMessage';
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
      <DialogueItem
        isActive={dialogue.id === currentDialogue}
        modification="chat-list"
        photo={dialogue.photo}
        title={formatMessage(dialogue)}
        lastMessage={dialogue.message}
        onClick={chooseMessage(dialogue.id)}          
      />
    )
  })
  return (
    <div className={
      `chat-list ${isEmpty ? 'chat-list_empty' : ''}`
    }>
      <div className="chat-list__search">
        <Input
          className="chat-list__input"
          name="chatList"
          value={searchValue}
          icon="searchlogo"
          onInput={(value) => setSearchValue(value)}
        />
      </div>
      {!isEmpty ? dataToRender() : ''}
    </div>
  );
}