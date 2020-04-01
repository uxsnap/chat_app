const bcrypt = require('bcrypt');
const redisDB = require('./redis');
const capitalize = require('../helpers/capitalize');

class User {
  constructor(userOptions) {
    const { userId, email, pass, name } = userOptions;
    this.userId = userId;
    this.email = email;
    this.pass = pass;
    this.name = name;
  }

  setUser() {
    const validator = new UserValidator();

    let resp = {
      message: '',
      status: 200
    }

    const fields = [
      {fieldName: 'email', val: this.email},
      {fieldName: 'pass', val: this.pass},
      {fieldName: 'name', val: this.name}
    ]

    for (const item of fields) {
      const validated = validator['validate' + capitalize(item.fieldName)];
      if (validated.status !== 200) {
        resp = validated;
        return resp;
      }
    }

    try {
      const hash = await bcrypt.hash(this.pass, 10);
      redisDB.hmset("users", [
        this.userId,
        this.email,
        this.name,
        hash
      ], (err, res) => {
        if (err) {
          resp.message = 'Problems with setting the user';
          resp.status = 500;
        }
        console.log('Done.');
      });
    } catch (e) {
      resp.status = 500;
      resp.message = 'Problems with hashing the password';
    }
    return resp;
  }

  getUser() {
    const validator = new UserValidator();

    let resp = {
      message: '',
      status: 200
    }

    const fields = [
      {fieldName: 'email', val: this.email},
      {fieldName: 'pass', val: this.pass},
    ]

    for (const item of fields) {
      const validated = validator['validate' + capitalize(item.fieldName)];
      if (validated.status !== 200) {
        resp = validated;
        return resp;
      }
    }
  }
}

module.exports = User;