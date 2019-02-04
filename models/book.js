const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true},
  releaseDate: { type: Date },
  genre: { type: String },
  image: { type: String }
})

module.exports = mongoose.model('Book', bookSchema)
