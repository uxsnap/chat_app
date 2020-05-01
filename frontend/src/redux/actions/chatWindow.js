export const handleSearch = (dialogueId, text) => ({
  type: "HANDLE_SEARCH",
  dialogueId,
  text
});

export const openMessages = messages => ({
  type: "OPEN_MESSAGES",
  messages
});
