const { 
  handleLogin
} = require('../resolvers/auth');

module.exports = function(socket) {
  socket.on('auth:login', handleLogin)
}