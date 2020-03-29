const express   = require('express');
const http      = requrie('http');
const session   = require('express-session');
const { resolve } = require('path');
const { config }  = require('./config.js');

const app = express();
const server = http.Server(app);

// Socket implementation
const io = require('socket.io')(server);

// Express configuration
app.set('trust proxy', 1);
app.use(session(config));

server.listen(3001)

app.get('/', async (req, res) => {
  res.sendFile(resolve(__dirname + './login.html'));
});
