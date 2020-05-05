export const handleSearch = (dialogueId, text) => ({
  type: "HANDLE_SEARCH",
  dialogueId,
  text
});

export const openMessages = (messages, toUser) => {
  return (dispatch, getState) => {
    const { foundUsers } = getState().chatList;
    const found = foundUsers.find(user => user.userId === toUser)
    dispatch({
      type: "OPEN_MESSAGES",
      toUser,
      messages,
      currentUser: found
    });
  }
};


export const addAsset = () => ({});
