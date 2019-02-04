const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true},
  image: { type: String, required: true },
  releaseDate: { type: String },
  genre: { type: String }
})

module.exports = mongoose.model('Book', bookSchema)
