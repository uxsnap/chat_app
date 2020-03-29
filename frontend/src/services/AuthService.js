import axiosClient from 'helpers/axiosClient';

export default class {
  constructor(email = '', name = '', pass = '') {
    this.name = '';
    this.email = '';
    this.pass = '';
  }

  async login() {
    return await axiosClient.get('auth/login', {
      params: {
        email: this.email,
        pass: this.pass
      }
    });
  } 

  async register() {
    return await axiosClient.get('auth/register', {
      params: {
        name: this.name,
        email: this.email,
        pass: this.pass
      }
    });
  } 

  async forgotPass() {
    return await axiosClient.get('auth/forgotPass', {
      params: {
        email: this.email
      }
    });
  } 
}