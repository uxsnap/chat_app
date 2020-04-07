const User = require('../models/User');
const UserValidator = require('../helpers/validators/UserValidator');

function handleLogin(email, pass) {
  const validator = new UserValidator();
  let res = validator.validateEmail(email);
  if (res.status === 200)
    res = validator.validatePass(pass);
  return {
    res,
    type: 'LOGIN'
  };
}

function handleReg(name, email, pass) {
  const validator = new UserValidator();

  const values = [
    {field: name, func: validator.validateName},
    {field: email, func: validator.validateEmail},
    {field: pass, func: validator.validatePass}
  ]

  let res;

  for (const val of values) {
    res = val.func(val.field);
    if (res.status !== 200) {
      return res;
    }
  }

  const user = new User(
    name, email, pass
  );

  try {
    res = await User.save();
  } catch (e) {
    res.status = 500;
    res.message = 'Problems with saving'
  }

  return {
    res,
    type: 'REGISTRATION'
  };
}

function handleForgotPass() {
}

module.exports.handleLogin = handleLogin;
module.exports.handleReg = handleReg;
module.exports.handleForgotPass = handleForgotPass;