import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce'; 
import Icon from './Icon';
import Input from './Input';
import ActionList from './ActionList';
import Asset from './Asset';

const ChatNavbar = ({
  lastSeen = null,
  handleSearch,
  addUser,
  // users,
  currentUser,
  actions = [],
  // deleteUsers,
  deleteMessages
}) => {
  function _handleStatus(date) {
    return date;
  }

  const [isSearch, setSearch] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [debouncedValue] = useDebounce(searchVal, 100);

  useEffect(() => {
    handleSearch(debouncedValue);
  }, [debouncedValue])

  return (
    <div className="chat-navbar">
      <div className="chat-navbar__main">
        <div className="chat-navbar__name">
          { currentUser.name }
        </div>
        <div className="chat-navbar__last-seen">
          { lastSeen ? _handleStatus(lastSeen) : null }
        </div>
      </div>
      <div className="chat-navbar__rest">
        <div className="chat-navbar__search">
          {isSearch &&
            <Input 
              icon="plus"
              onClick={() => {
                setSearch(false);
                handleSearch('');
              }}
              value={searchVal}
              onInput={(value) => setSearchVal(value)}
            />
            }
          {!isSearch && 
            <Icon name="searchlogo" onClick={() => {
              setSearch(true);
              handleSearch('');
            }}/>}
        </div>
        {actions &&
          <div className="chat-navbar__other">
            <Icon name="more"/>
            <ActionList/>
          </div>
        }
        <div className="chat-navbar__photo">
          <Asset src={currentUser.photo}/>
        </div>
      </div>
    </div>
  )
}

export default ChatNavbar;