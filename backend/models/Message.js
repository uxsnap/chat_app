const { model, Schema } = require('mongoose');
// // const redisDB = require('../redis');
// const capitalize = require('../helpers/capitalize');
// const defaultResponse = require('../helpers/defaultResponse');

const MessageSchema = new Schema({
  text: String,
  dialogueId: { type: Schema.Types.ObjectId, ref: 'Dialogues'},
  userId: Schema.Types.ObjectId,
  date: Date,
  fromUser: Schema.Types.ObjectId
});


const Message = model('Message', MessageSchema);

module.exports = Message;
