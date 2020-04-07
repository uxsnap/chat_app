const { 
  handleLogin,
  handleReg,
  handleForgotPass
} = require('../resolvers/auth');

module.exports = function(socket) {
  socket.on('auth:login', (data) => {
    const { email, pass } = JSON.parse(data);
    const res = handleLogin(email, pass);
    socket.emit('auth:submitted', JSON.stringify(res));
  });
  socket.on('auth:register', handleReg);
  socket.on('auth:forgotPass', handleForgotPass);
}