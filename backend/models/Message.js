const { model, Schema } = require('mongoose');
// // const redisDB = require('../redis');
// const capitalize = require('../helpers/capitalize');
// const defaultResponse = require('../helpers/defaultResponse');

const MessageSchema = new Schema({
  text: String,
  dialogue: {
    type: Schema.Types.ObjectId
    ref: 'Dialogue'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date,
  fromUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});


const Message = model('Message', MessageSchema);

module.exports = Message;
