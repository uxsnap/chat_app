import socket from 'helpers/api';

export default class {
  constructor(email = '', name = '', pass = '') {
    this.name = '';
    this.email = '';
    this.pass = '';
  }

  login() {
    return  socket.emit('auth:login', {
      params: {
        email: this.email,
        pass: this.pass
      }
    });
  } 

  register() {
    return socket.emit('auth:register', {
      params: {
        name: this.name,
        email: this.email,
        pass: this.pass
      }
    });
  } 

  forgotPass() {
    return socket.emit('auth:forgotPass', {
      params: {
        email: this.email
      }
    });
  } 
}