const express   = require('express');
const http      = require('http');
const mongoose =  require('mongoose');
const { resolve } = require('path');
const dotenv = require('dotenv');
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

const connectStr = 'mongodb+srv://' +
  process.env.DB_USER + ':' +
  process.env.DB_PASS +
  '@chatapp-pumsp.mongodb.net/test' +
  '?retryWrites=true&w=majority';

mongoose
  .connect(
    connectStr,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log('Connected to MONGO');
    server.listen(3001, () => console.log('listening.'));
  })
  .catch(err => console.log(err));
