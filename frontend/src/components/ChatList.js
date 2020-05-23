import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import formatDate from 'helpers/formatDate';
import capitalize from 'helpers/capitalize';
import useSocket from 'helpers/useSocket';
import Input from 'components/Input';
import DropDown from 'components/DropDown';
import Icon from 'components/Icon';
import DialogueItem from 'components/DialogueItem';

const ChatList = ({
  socket,
  // For testing purposes
  // userId,
  dialogues = [],
  addUsers,
  addDialogues,
  foundUsers = [],
  chooseMessage,
  currentDialogue,
  searchUsers,
  clearUsers,
  fetchDialogues,
  openDialogue,
  openMessages,
  userId
}) => {
  const [curValue, setSearchValue] = useState('');
  const [isOpened, setOpened] = useState(false);
  const [debouncedValue] = useDebounce(curValue, 100);
  
  async function compFetchDialogues() {
    await fetchDialogues(userId);
  }

  useEffect(() => {
    compFetchDialogues();
  }, [userId]);

  useEffect(() => {
    socket.on('found_users', (res) => {
      if (res.status === 200) {
        addUsers(res.data.users);
      }
    });
  }, [foundUsers]);

  useEffect(() => {
    socket.on('fetched_dialogues', (res) => {
      const parsed = JSON.parse(res);
      if (parsed.status === 200) {
        addDialogues(parsed.data.dialogues);
      }
    });
  }, [dialogues]);

  useEffect(() => {
    socket.on('dialogue_opened', async (res) => {
      const parsed = JSON.parse(res);
      const { status } = parsed;
      const { messages, toUser } = parsed.data;
      if (status === 200) {
        openMessages(messages, toUser);
        setSearchValue('');
        clearUsers();
        setOpened(true);
        await compFetchDialogues();
      }
    });
  }, [isOpened])

  function _prepareUsers(users) {
    return users.map(user => {
      return {
        id: user.userId,
        value: curValue.includes('@') ? '@' + user.peerId : user.name
      }
    });
  }

  function _checkDate(message) {
    if (!message) return '';
    return formatDate(message.date);
  }

  function _checkLastMessage(message) {
    if (!message) return 'There is no messages yet';
    return message.message;
  }
  
  const isEmpty = !dialogues.length;
  const dataToRender = () => dialogues
    .map((dialogue) => {
    const { messages, lastMessage } = dialogue;
    console.log(lastMessage);
    return (
      <li 
        className="chat-list__item"
        key={'chat-list__item_' + dialogue.id}
      >
        <DialogueItem
          isActive={dialogue.id === currentDialogue}
          modification="chat-list"
          photo={dialogue.user.photo}
          title={capitalize(dialogue.user.name)}
          subtitle={_checkDate(lastMessage)}
          lastMessage={_checkLastMessage(lastMessage)}
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
          value={debouncedValue}
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
