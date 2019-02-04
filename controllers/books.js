const Book = require('../models/book')


function indexRoute(req, res) {
  Book
    .find()
    .then(books => res.status(200).json(books))
}

function createRoute(req, res) {
  Book
    .create(req.body)
    .then(book => res.status(201).json(book))
    .catch(err => res.status(422).json(err.errors))
}


module.exports = {
  index: indexRoute,
  create: createRoute
}
