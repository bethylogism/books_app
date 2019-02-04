import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      navbarOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    this.setState({navbarOpen: !this.state.navbarOpen})
  }


  render(){
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <Link to="/" className="navbar-item" >
            <h1 className="title is-2">Simple Books App</h1>
          </Link>

          <a className={`navbar-burger burger ${this.state.navbarOpen ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen? 'is-active': ''}`}>
          <div className="navbar-end">
            <Link to='/' className="navbar-item">Home</Link>
            <Link to='/books' className="navbar-item">Book list</Link>
            <Link to='/books/new' className="navbar-item">Add a book</Link>

          </div>
        </div>
      </nav>
    )
  }
}

export default Header
