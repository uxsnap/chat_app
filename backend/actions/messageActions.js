const {
  addMessage
} = require('../resolvers/message');


module.exports = function(socket) {
  socket.on('message:send', async (req) => {
    const { dialogueId, message, fromUser } = JSON.parse(req);
    console.log(dialogueId, message, fromUser);
    const res = await addMessage(
      dialogueId,
      fromUser,
      message,
      new Date()
    );
    // console.log(res);
    socket.emit('message:added', JSON.stringify(res));
  });
}