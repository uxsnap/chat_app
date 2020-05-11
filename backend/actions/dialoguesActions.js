const {
  fetchDialogues,
  openDialogue
} = require('../resolvers/dialogue');


module.exports = function(socket) {
  socket.on('open_dialogue', async (req) => {
    const { userId, id } = JSON.parse(req);
    const res = await openDialogue(userId, id);
    socket.emit('dialogue_opened', JSON.stringify(res));
  });

  socket.on('fetch_dialogues', async (req) => {
    const { userId } = JSON.parse(req);
    const res  = await fetchDialogues(userId);
    socket.emit('fetched_dialogues', JSON.stringify(res));
  });
}
