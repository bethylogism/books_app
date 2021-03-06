import React from 'react'
import axios from 'axios'
import BookCard from './BookCard'

class BooksIndex extends React.Component{
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(res => this.setState({ books: res.data }))
  }

  render() {
    if (!this.state.books) return <p> Waiting for your book </p>
    return (
      <section className='section'>
        <div className='container'>

          <div className='columns is-multiline'>

            {this.state.books.map(book =>
              <div className='column is-one-quarter' key={book._id}>
                <BookCard {...book} />
              </div>
            )}

          </div>
        </div>
      </section>
    )
  }
}

export default BooksIndex
