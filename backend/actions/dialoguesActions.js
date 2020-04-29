const {
  fetchDialogues
} = require('../resolvers/dialogue');

module.exports = function(socket) {
  socket.on('fetch_dialogues', async (req) => {
    const { userId } = JSON.parse(req);
    console.log(req);
    const res  = await fetchDialogues(userId);
    socket.emit('fetched_dialogues', JSON.stringify(res));
  });
}
