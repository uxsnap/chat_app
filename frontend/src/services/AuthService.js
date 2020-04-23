import authSocket from 'helpers/constants/authSocket';

export default class {
  constructor(email, name, pass) {
    this.socket = authSocket;
    this.name = name;
    this.email = email;
    this.pass = pass;
  }

  async login() {
    return await this.socket.emit('login',
      JSON.stringify({
        email: this.email,
        pass: this.pass
      })
    );
  } 

  async register() {
    return await this.socket.emit('register',
      JSON.stringify({
        name: this.name,
        email: this.email,
        pass: this.pass
      })
    );
  } 

  async forgotPass() {
    return await this.socket.emit('forgotPass',
      JSON.stringify({
        email: this.email
      })
    );
  }

  async changePass(token) {
    return await this.socket.emit('changePass', 
      JSON.stringify({
        token,
        pass: this.pass
      })
    );
  }
}