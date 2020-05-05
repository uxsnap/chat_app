import React from 'react';
import ChatNavbar from './ChatNavbar';
import ChatMessages from './ChatMessages';
import MessagePanel from './MessagePanel';
import handleMessages from 'helpers/handleMessages';

const ChatWindow = ({
  // Navbar
  searchValue = '',
  handleSearch,
  addUser,
  users = [],
  user = null,
  deleteUsers,
  deleteMessages,
  // Message
  messageValue = '',
  addAsset
  // searchValue = '',
  // handleSearch,
  // addUser,
  // currentUser = null,
  // users = [],
  // messages = [],
  // deleteMessages,
  // deleteUsers,
  // addAsset,
  // messageValue = '',
  // makePhoto,
  // handleStickers,
  // handleMessageClick,
  // handleAddMessages,
  // handleDeleteMessage,
  // handleEditMessage,
  // sendMessage
}) => {
  return (
    // TODO: add many users functionality
    <div className="chat-window">
      <div className="chat-window__header">
      {
        user && <ChatNavbar
          searchValue={searchValue}
          handleSearch={handleSearch}
          addUser={addUser}
          users={users}
          currentUser={user}
          deleteUsers={deleteUsers}
          deleteMessages={deleteMessages}
        />
      }
      </div>
      <div className="chat-window__main">
        { /*<ChatMessages
          messages={handleMessages(messages)}
          editMessage={handleEditMessage}
          deleteMessage={handleDeleteMessage}
          handleMessageClick={handleMessageClick}
        /> */}
      </div>
      <div className="chat-window__bottom">
        <MessagePanel 
          addAsset={addAsset}
          messageValue={messageValue}
        />
          {/*makePhoto={makePhoto}
          handleStickers={handleStickers}
          sendMessage={handleAddMessages}*/}
      </div>
    </div>
  );
}

export default ChatWindow;