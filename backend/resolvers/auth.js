const User = require('../models/User');
const UserValidator = require('../helpers/validators/UserValidator');
const bcrypt = require('bcrypt');
const crypto = requrie('crypto');
const smtp = require('smtp');

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

async function handleForgotPass(email) {
  const validator = new UserValidator();

  const values = [
    {field: email, func: validator.validateEmail},
  ];

  const responseObject = {
    res: null,
    type: 'FORGOT_PASS'
  };

  let res = validator.validateEmail(email);
  if (res.status !== 200)
    return res;

  try {
    const found = User.findByEmail(email);

    if (!found) {
      res.status = 500;
      res.message = 'There is no user with this email';
    } else {
      const buffer = await new Promise((resolve, reject) => {
        crypto.randomBytes(20, (err, buffer) => {
          if (err) {
            res.status = 500;
            res.message = 'Error occured.';
            reject();
          }
          resolve(buffer);
        });
      });

      const token = crypto
        .createHash("sha1")
        .update(buffer)
        .digest("hex");

      await User.findByIdAndUpdate(
        { _id: found._id },
        {
          resetPassToken: token,
          resetPassExpires: Date.now() + 86400000
        },
        { upsert: true, new: true }
      );

      const url = `${process.env.HOST}:${process.env.PORT}`;

      const mailData = {
        to: found.email,
        from: url,
        template: 'forgot-password-email',
        subject: 'Password help has arrived!',
        context: {
          url: `${url}/auth/reset_password?token=${token}`,
          name: found.name.split(' ')[0]
        }
      };

      smtp(
        process.env.MAIL_SERVICE_USER,
        process.env.MAIL_SERVICE_PASS
      ).sendMail(data, (err) => {
        if (err) {
          res.status = 500;
          res.message = 'Error occured.'
        }
      });
    }
  } catch (e) {
    res.status = 500;
    res.message = 'Error occured when checking user is in db';
  }

  responseObject.res = res;

  return responseObject;
}

module.exports.handleLogin = handleLogin;
module.exports.handleReg = handleReg;
module.exports.handleForgotPass = handleForgotPass;