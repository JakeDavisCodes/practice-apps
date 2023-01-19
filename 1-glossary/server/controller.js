const Word = require('./db.js').Word;

module.exports = {
  get: () => {
    return Word.find({})
  },
  post: (wordObj) => {
    console.log(wordObj)
    return Word.create(wordObj)
  },
  put: (id, definition) => {
    return Word.updateOne({_id: id }, { definition: definition })
  },
  delete: (id) => {
    return Word.deleteMany({ _id: id })
  },
  clear: () => {
    return Word.deleteMany({})
  }
}