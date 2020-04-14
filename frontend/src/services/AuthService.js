import socket from 'helpers/api';

export default class {
  constructor(email, name, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass;
  }

  async login() {
    return await socket.emit('auth:login',
      JSON.stringify({
        email: this.email,
        pass: this.pass
      })
    );
  } 

  async register() {
    return await socket.emit('auth:register',
      JSON.stringify({
        name: this.name,
        email: this.email,
        pass: this.pass
      })
    );
  } 

  async forgotPass() {
    return await socket.emit('auth:forgotPass',
      JSON.stringify({
        email: this.email
      })
    );
  }

  async changePass(token) {
    return await socket.emit('auth:changePass', 
      JSON.stringify({
        token,
        pass: this.pass
      })
    );
  }
}