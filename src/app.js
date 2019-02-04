import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import 'bulma'

import axios from 'axios'


import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import BooksIndex from './components/books/BooksIndex'
import Home from './components/Home'
import BooksNew from './components/books/BooksNew'



class App extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    console.log('the Component did mount!')
    axios
      .get('/api/books')
      .then( response => console.log(response))
  }

  render() {
    console.log('render is called')

    return (
      <main>
        <div className="container section">
          <h2 className="title is-2">Beths Books App</h2>
          <BrowserRouter>
            <main>
              <nav>
                <Link to="/">Home </Link>
                <Link to="/books"> books Index</Link>
                <Link to="/books/new"> Add a book</Link>
              </nav>

              <Switch>
                <Route path="/books/new" component={BooksNew} />
                <Route path="/books" component={BooksIndex} />
                <Route exact path="/" component={Home} />
              </Switch>
            </main>
          </BrowserRouter>
        </div>

      </main>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
