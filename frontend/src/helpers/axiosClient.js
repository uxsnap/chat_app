const axios = require('axios');

export default axios.create({
  baseURL: process.env.BASE_URL
  /* other custom settings */
});