class UserValidator {
  
  validateEmail(email) {
    if (!email.length && !email.includes('@'))
      return {
        status: 500,
        message: 'Email is incorrect.'
      }
    return {
      status: 200,
      message: ''
    }
  }

  validateName(name) {
    const check = name.length && name.length < 100; 
    return {
      status: check ? 200 : 500,
      message: check ? '' : 'Name is incorrect.'
    }
  }

  validatePass(pass) {
    const check = pass.length && /[A-Z]/g.test(pass) &&
      /[0-9]/g.test(pass) &&
      /[!?*&%]/g.test(pass);
    return {
      status: check ? 200 : 500,
      message: check ? '' : 'Password is incorrect'
    }
  }
}

module.exports = UserValidator;