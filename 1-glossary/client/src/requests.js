const axios = require('axios');

module.exports = {


  // USE PROMISES


  put: (id, def) => {
    console.log(`Sending Put request with ${id}`)
  },
  post: (word, definition) => {
    return axios.post('/words', { word, definition })
  },
  get: () => {
    console.log(`Sending Get request`)
    return axios.get('/words')
  }
}