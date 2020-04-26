import React from 'react';
import ChatNavbar from './ChatNavbar';
import ChatMessages from './ChatMessages';

export default ({
  // searchValue = '',
  // // addUser,
  // currentUser = null,
  // // users = [],
  // messages = [],
  // handleSearch,
  // deleteMessages,
  // deleteUsers,
  // addAsset,
  // messageValue = '',
  // makePhoto,
  // handleStickers,
  // handleMessageClick,
  handleAddMessages,
  handleDeleteMessage,
  handleEditMessage,
  // sendMessage
}) => {
  return (
    // TODO: add many users functionality
    <div className="chat-window">
      <div className="chat-window__header">
        <ChatNavbar
          searchValue={searchValue}
          handleSearch={handleSearch}
          addUser={addUser}
          users={users}
          currentUser={currentUser}
          deleteUsers={deleteUsers}
          deleteMessages={deleteMessages}
        />
      </div>
      <div className="chat-window__main">
        <ChatMessages
          messages={messages}
          editMessage={handleEditMessage}
          deleteMessage={handleDeleteMessage}
          handleMessageClick={handleMessageClick}
        />
      </div>
      <div className="chat-window__bottom">
        <MessagePanel 
          addAsset={addAsset}
          messageValue={messageValue}
          makePhoto={makePhoto}
          handleStickers={handleStickers}
          sendMessage={handleAddMessages}
        />
      </div>
    </div>
  );
}
