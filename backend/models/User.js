const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// // const redisDB = require('../redis');
// const capitalize = require('../helpers/capitalize');
// const defaultResponse = require('../helpers/defaultResponse');

const User = mongoose.model('User', {
  name: String,
  email: String,
  pass: String
});

module.exports = User;

// class User {
//   constructor(userOptions) {
//     const { email, pass, name } = userOptions;
//     this.email = email;
//     this.pass = pass;
//     this.name = name;
//   }

//   async addUser() {
//     let resp = defaultResponse();
//     try {
//       const hash = await bcrypt.hash(this.pass, 10);
//       redisDB.hset("users", [
//         this.email,
//         this.name,
//         hash
//       ], (err, res) => {
//         if (err) {
//           resp.message = 'Problems with setting the user';
//           resp.status = 500;
//         }
//         console.log('Done.');
//       });
//     } catch (e) {
//       resp.status = 500;
//       resp.message = 'Problems with hashing the password';
//     }
//     return resp;
//   }

//   getUser() {
//     redisDB.hmget("users", [

//     ]);
//   }
}

module.exports = User;