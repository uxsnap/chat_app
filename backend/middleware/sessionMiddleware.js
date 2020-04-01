const session = require('express-session');
const sessionConfig = require('../helpers/sessionConfig');

module.exports = session(
  sessionConfig
);