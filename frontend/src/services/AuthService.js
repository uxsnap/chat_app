import socket from 'helpers/api';

export default class {
  constructor(email = '', name = '', pass = '') {
    this.name = '';
    this.email = '';
    this.pass = '';
  }

  async login() {
    return await socket.emit('auth:login', {
      params: {
        email: this.email,
        pass: this.pass
      }
    });
  } 

  async register() {
    return await socket.emit('auth:register', {
      params: {
        name: this.name,
        email: this.email,
        pass: this.pass
      }
    });
  } 

  async forgotPass() {
    return await socket.emit('auth:forgotPass', {
      params: {
        email: this.email
      }
    });
  } 
}