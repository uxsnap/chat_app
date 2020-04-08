const { 
  handleLogin,
  handleReg,
  handleForgotPass
} = require('../resolvers/auth');

module.exports = function(socket) {
  socket.on('auth:login', async (data) => {
    const { email, pass } = JSON.parse(data);
    const res = await handleLogin(email, pass);
    const { _id } = res; 
    if (_id) socket.request.session.userId = _id;
    console.log(socket.request.session);
    // socket.emit('auth:submitted', JSON.stringify(res));
  });

  socket.on('auth:register', async (data) => {
    const { name, email, pass } = JSON.parse(data);
    const res = await handleReg(name, email, pass);
    socket.emit('auth:submitted', JSON.stringify(res));
  });

  socket.on('auth:forgotPass', handleForgotPass);
}