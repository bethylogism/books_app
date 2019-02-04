import React from 'react'
import axios from 'axios'

import BookForm from './BookForm'

class BooksNew extends React.Component {
  constructor() {
    super()

    this.state= {
      data: {
        title: '',
        author: '',
        image: '',
        releaseDate: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( { target: { name, value }}) {
    const data = {... this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post('/api/books', this.state.data)
      .then(() => this.props.history.push('/books'))
      .catch(err => alert(err.message))
  }



  render() {
    return(
      <main className="section">
        <div className="container">
          <BookForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}


export default BooksNew
