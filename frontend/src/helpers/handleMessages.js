export default (messages, searchValue) => {
  return messages.filter(m => m.message.startsWith(searchValue));
}
