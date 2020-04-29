import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import formatDate from 'helpers/formatDate';
import capitalize from 'helpers/capitalize';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import Icon from 'components/Icon';
import DialogueItem from 'components/DialogueItem';

const ChatList = ({
  socket,
  // For testing purposes
  // userId,
  dialogues,
  addUsers,
  addDialogues,
  foundUsers = [],
  chooseMessage,
  currentDialogue,
  searchUsers,
  fetchDialogues,
  openDialogue
}) => {
  const userId = '5ea6e3351f878110cceca7bc';
  const [curValue, setSearchValue] = useState('');
  const [debouncedValue] = useDebounce(curValue, 100);
  
  useEffect(() => {
    async function compFetchDialogues() {
      await fetchDialogues(userId);
    }
    compFetchDialogues();
  }, [userId])

  useEffect(() => {
    socket.on('found_users', (res) => {
      if (res.status === 200)
        addUsers(res.users);
    });

    socket.on('fetched_dialogues', (res) => {
       console.log(res);
       if (res.status === 200)
         addDialogues(res.dialogues);
    });
  }, [foundUsers])

  function _prepareUsers(users) {
    return users.map(user => {
      return {
        id: user.userId,
        value: curValue.includes('@') ? '@' + user.peerId : user.name
      }
    });
  }

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
          onInput={(value) => {
            value.length > 1
             ? searchUsers(debouncedValue)
             : addUsers([]);
            setSearchValue(value);
          }}
        />
        <DropDown 
          className="chat-list__select"
          items={_prepareUsers(foundUsers)}
          onClick={({id}) => openDialogue(userId, id)}
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
