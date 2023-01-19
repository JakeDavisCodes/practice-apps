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
  search: (search) => {
    console.log(`Searching for ${search}`)
    return axios({
      method: 'GET',
      url: '/words/search',
      data: { search: search }
    })
  },
  delete: (id) => {
    console.log(`Sending delete request for ${id}`)
    return axios({
      method: 'DELETE',
      url: '/words',
      data: { id }
    })
  },
  deleteAll: () => {
    console.log(`Sending a request to delete all!`)
    return axios.delete('/words/all')
  }
}