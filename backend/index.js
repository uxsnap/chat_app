const express   = require('express');
const http      = require('http');
const session   = require('express-session');
const { resolve } = require('path');
const sessionMiddleware = require('./middleware/sessionMiddleware');
const authActions = require('./actions/authActions');

const app = express();
const server = http.Server(app);

// Socket implementation
const io = require('socket.io')(server);

// Socket config
io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
});

// Express configuration
app.set('trust proxy', 1);
app.use(sessionMiddleware);

io.on('connection', (socket) => {
  authActions(socket);
});

server.listen(3001);
