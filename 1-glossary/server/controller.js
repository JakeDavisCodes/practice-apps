const Word = require('./db.js').Word;

module.exports = {
  get: () => {
    return Word.find({})
  },
  post: (word) => {
    console.log(word)
    return Word.insertMany([word])
  }
}