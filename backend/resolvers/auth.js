const User = require('../models/User');
const UserValidator = require('../helpers/validators/UserValidator');
const bcrypt = require('bcrypt');

async function handleLogin(email, pass) {
  const validator = new UserValidator();

  const values = [
    {field: email, func: validator.validateEmail},
    // {field: pass, func: validator.validatePass}
  ]

  const responseObject = {
    _id: null,
    res: null,
    type: 'LOGIN'
  };

  let res;

  for (const val of values) {
    res = val.func(val.field);
    if (res.status !== 200) {
      return res;
    }
  }

  try {
    const found = await User.findByEmail(email);

    if (!found) {
      res.status = 500;
      res.message = 'There is no user with such mail';
    } else {
      const comparePasswordResult = await bcrypt.compare(pass, found.pass);
      if (!comparePasswordResult) {
        res.status = 500;
        res.message = 'Passwords doesn\'t match';
      } else {
        responseObject._id = found._id;
      }
    }
  } catch (e) {
    res.status = 500;
    res.message = 'Problems with saving'
  }

  responseObject.res = res;

  return responseObject;
}

async function handleReg(name, email, pass) {
  const validator = new UserValidator();

  const values = [
    {field: name, func: validator.validateName},
    {field: email, func: validator.validateEmail},
    // {field: pass, func: validator.validatePass}
  ];

  const responseObject = {
    res: null,
    type: 'REGISTRATION'
  };

  let res;

  for (const val of values) {
    res = val.func(val.field);
    if (res.status !== 200) {
      return res;
    }
  }

  try {

    const passHashed = await bcrypt.hash(
      pass,
      10 // Salt rounds
    );

    const user = {
      name, email,
      pass: passHashed
    };

    const found = await User.findByEmail(email);

    if (found) {
      res.status = 500;
      res.message = 'Email is used';
      return res;
    } else {
      const userToSave = new User(user);
      await userToSave.save()
      console.log('user saved.');
    }
  } catch (err) {
    res.status = 500;
    res.message = 'Problems with saving'
  }

  responseObject.res = res;

  return responseObject;
}

function handleForgotPass() {
}

module.exports.handleLogin = handleLogin;
module.exports.handleReg = handleReg;
module.exports.handleForgotPass = handleForgotPass;