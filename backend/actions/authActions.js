const { 
  handleLogin,
  handleReg,
  handleForgotPass,
  handleChangePass
} = require('../resolvers/auth');

module.exports = function(socket) {
  socket.on('login', async (data) => {
    const { email, pass } = JSON.parse(data);
    const res = await handleLogin(email, pass);
    const { _id } = res;
    if (_id) {
      socket.request.session._id = _id;
      socket.request.session.save((err) => {
        if (err) {
          console.error(err);
        }
      });
    }
    socket.emit('submitted', JSON.stringify(res));
  });

  socket.on('register', async (data) => {
    const { name, email, pass } = JSON.parse(data);
    const res = await handleReg(name, email, pass);
    socket.emit('submitted', JSON.stringify(res));
  });

  socket.on('forgotPass', async (data) => {
    const { email } = JSON.parse(data);
    const res = await handleForgotPass(email);
    socket.emit('submitted', JSON.stringify(res));
  });

  socket.on('changePass', async (data) => {
    const { token, pass } = JSON.parse(data);
    const res = await handleChangePass(token, pass);
    socket.emit('passChanged', JSON.stringify(res));
  });
}