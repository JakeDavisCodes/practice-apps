const Word = require('./db.js').Word;

module.exports = {
  get: () => {
    return Word.find({})
  }
}