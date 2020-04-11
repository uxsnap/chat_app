const nodemailer = require('nodemailer');

module.exports = function(email, pass) {
  return nodemailer.createTransport({
    service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
    auth: {
      user: email,
      pass: pass
    }
  });
}