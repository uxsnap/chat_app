const { model, Schema } = require('mongoose');
// // const redisDB = require('../redis');
// const capitalize = require('../helpers/capitalize');
// const defaultResponse = require('../helpers/defaultResponse');

const MessageSchema = new Schema({
  fromUser: Schema.Types.ObjectId,
  message: String,
  date: Date
});


const Message = model('Message', MessageSchema);

module.exports = Message;
