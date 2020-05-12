import React, { useEffect } from 'react';
import ChatNavbar from './ChatNavbar';
import ChatMessages from './ChatMessages';
import MessagePanel from './MessagePanel';
import handleMessages from 'helpers/handleMessages';

const ChatWindow = ({
  // Dialogue
  dialogueId = '',
  // Navbar
  searchValue = '',
  handleSearch,
  addUser,
  users = [],
  user = null,
  curUserId = null,
  deleteUsers,
  deleteMessages,
  // Message
  messageValue = '',
  addAsset,
  messages = [],
  sendMessage,
  socket
  // searchValue = '',
  // handleSearch,
  // addUser,
  // currentUser = null,
  // users = [],
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
  function windowSendMessage(message) {
    sendMessage(dialogueId, curUserId, message);
  }

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
        <ChatMessages
          messages={handleMessages(messages)}
          // editMessage={handleEditMessage}
          // deleteMessage={handleDeleteMessage}
          // handleMessageClick={handleMessageClick}
        />
      </div>
      <div className="chat-window__bottom">
        {
          user &&
          <MessagePanel 
            addAsset={addAsset}
            sendMessage={(message) => windowSendMessage(message)}
          />
        }
          {/*makePhoto={makePhoto}
          handleStickers={handleStickers}
          sendMessage={handleAddMessages}*/}
      </div>
    </div>
  );
}

export default ChatWindow;