const { resolve } = require('path');

require('dotenv').config({
  path: resolve('../.env')
});


module.exports = 'mongodb+srv://' +
  process.env.DB_USER + ':' +
  process.env.DB_PASS +
  '@' + process.env.DB_CLUSTER + '.mongodb.net/' + process.env.DB_NAME +
  '?retryWrites=true&w=majority';
