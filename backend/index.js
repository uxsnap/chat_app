const express   = require('express');
const http      = require('http');
const mongoose =  require('mongoose');
const { resolve } = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

// Session
const session   = require('express-session');
const MongoStore = require('connect-mongo')(session);
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: true
})

const authActions = require('./actions/authActions');
const usersActions = require('./actions/usersActions');
const dialoguesActions = require('./actions/dialoguesActions');
const messageActions = require('./actions/messageActions');

const connectStr = require('./helpers/connectStr');

const app = express();
const server = http.Server(app);

// Socket implementation
const io = require('socket.io')(server);


// Socket config
io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
});

// Express configuration
app.use(sessionMiddleware);

const authIO = io.of('/auth');
const chatIO = io.of('/chat'); 

authIO.on('connection', (socket) => {
  authActions(socket);
});

chatIO.on('connection', (socket) => {
  usersActions(socket);
  dialoguesActions(socket);
  messageActions(socket);
})

mongoose.set('useFindAndModify', false);
mongoose
  .connect(
    connectStr,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    server.listen(process.env.PORT, () => console.log('listening.'));
  })
  .catch(err => console.log(err));
