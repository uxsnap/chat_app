import React, { useState } from 'react';
import Icon from './Icon';
import ActionList from './ActionList';
import Asset from './Asset';

const ChatNavbar = ({
  lastSeen = null,
  searchValue,
  handleSearch,
  addUser,
  // users,
  currentUser,
  // deleteUsers,
  deleteMessages
}) => {
  function _handleStatus(date) {
    return date;
  }

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
          <Icon name="searchlogo"/>
          <Icon name=""/>
          <div className="chat-navbar__other">
            <ActionList/>
          </div>
        </div>
        <div className="chat-navbar__photo">
          <Asset src={currentUser.photo}/>
        </div>
      </div>
    </div>
  )
}

export default ChatNavbar;