const axios = require('axios');

module.exports = {


  // USE PROMISES


  put: (id, definition) => {
    console.log(`Sending Put request with ${id}`)
    return axios.put('/words', { id, definition})
  },
  post: (word, definition) => {
    return axios.post('/words', { word, definition })
  },
  get: () => {
    console.log(`Sending Get request`)
    return axios.get('/words')
  }
}