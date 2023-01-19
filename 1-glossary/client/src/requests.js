module.exports = {
  put: (id, def) => {
    console.log(`Sending Put request with ${id}`)
  },
  post: (word, def) => {
    console.log(`Sending Post request with ${word}`)
  },
  get: () => {
    console.log(`Sending Get request`)
  }
}