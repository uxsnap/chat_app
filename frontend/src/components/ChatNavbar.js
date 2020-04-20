import React, { useState } from 'react';
import Icon from './Icon';
import ActionList from './ActionList';

export default ({
  lastSeen = new Date(),
  searchValue,
  handleSearch,
  addUser,
  users,
  currentUser,
  deleteUsers,
  deleteMessages
}) => {
  return (
    <div className="chat-navbar">
      <div className="chat-navbar__main">
        <div className="chat-navbar__name">{
          currentUser.name
        }</div>
        <div className="chat-navbar__last-seen">
        { lastSeen }
        </div>
      </div>
      <div className="chat-navbar__rest">
        <div className="chat-navbar__search">
          <Icon name="searchlogo"/>
        </div>
        // TODO: add action list
        // <div className="chat-navbar__other">
        //   <ActionList/>
        // </div>
        <div className="chat-navbar__photo">
          <img src={currentUser.photo} alt="user_photo"/>
        </div>
      </div>
    </div>
  )
}