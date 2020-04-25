const { model, Schema } = require('mongoose');
// // const redisDB = require('../redis');
// const capitalize = require('../helpers/capitalize');
// const defaultResponse = require('../helpers/defaultResponse');

const UserSchema = new Schema({
  name: String,
  email: String,
  pass: String,
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }],
  resetPassToken: String,
  resetPassExpires: Date
});

UserSchema.statics.findByEmail = async function(email) {
  try {
    const res = await this.findOne({email});
    return res;
  } catch (e) {
    console.log(e);
  }
} 

const User = model('User', UserSchema);

module.exports = User;
