const { model, Schema } = require('mongoose');

const DialogueSchema = new Schema({
  fromUser: Schema.Types.ObjectId,
  toUser: Schema.Types.ObjectId,
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }]
});


const Dialogue = model('Dialogue', DialogueSchema); 

module.exports = Dialogue;
