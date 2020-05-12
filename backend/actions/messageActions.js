const {
  addMessage
} = require('../resolvers/message');


module.exports = function(socket) {
  socket.on('message:send', async (req) => {
    const { dialogueId, message, fromUser, date } = JSON.parse(req);
    const res = await addMessage(
      dialogueId,
      fromUser,
      message,
      date
    );
    socket.emit('message:added', JSON.stringify(res));
  });
}