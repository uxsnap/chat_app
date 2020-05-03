const { model, Schema } = require('mongoose');
// // const redisDB = require('../redis');
// const capitalize = require('../helpers/capitalize');
// const defaultResponse = require('../helpers/defaultResponse');

const UserSchema = new Schema({
  name: String,
  email: String,
  pass: String,
  peerId: String,
  dialogues: [{
    type: Schema.Types.ObjectId,
    ref: 'Dialogue'
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

UserSchema.statics.findByNameOrPeerId = async function(value) {
  try {
    const regexp = new RegExp('^' + value);
    const res = await this.find({
      $or: [ { peerId: regexp}, { name: regexp}]
    });
    return res.map(user => ({
      peerId: user.peerId,
      userId: user._id,
      name: user.name
    }));
  } catch (e) {
    console.log(e);
  }
} 

const User = model('User', UserSchema);

module.exports = User;
