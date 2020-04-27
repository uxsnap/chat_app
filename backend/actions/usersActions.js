const {
  handleUserSearch
} = require('../resolvers/users');

module.exports = (socket) => {
  socket.on('find_users', async (req) => {
    const { value } = JSON.parse(req);
    const res = await handleUserSearch(value);
    socket.emit('found_users', res);
  });
}