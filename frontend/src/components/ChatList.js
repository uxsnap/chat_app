import React, { useState } from 'react';
import formatDate from 'helpers/formatDate';
import capitalize from 'helpers/capitalize';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import Icon from 'components/Icon';
import DialogueItem from 'components/DialogueItem';

const ChatList = ({
  dialogues,
  foundUsers = [],
  chooseMessage,
  currentDialogue,
  searchUsers,
  openDialogue
}) => {
  const [curValue, setSearchValue] = useState('');

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
          value={curValue}
          icon="searchlogo"
          onInput={(value) => {
            curValue.length > 3 && searchUsers(curValue);
            setSearchValue(value);
          }}
        />
        <DropDown 
          className="chat-list__select"
          items={foundUsers}
          onClick={(item) => openDialogue(item)}
          size={5}
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

export default ChatList;