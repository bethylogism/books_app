import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

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
        </div>
      </main>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
