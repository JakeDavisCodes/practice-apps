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
  },
  delete: (id) => {
    console.log(`Sending delete request for ${id}`)
    return axios.delete('/words', { id })
  },
  deleteAll: () => {
    console.log(`Sending a request to delete all!`)
    return axios.delete('/words/all')
  }
}