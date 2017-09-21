import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom'

class Header extends Component{
  render() {
    return (
      <header className="header">
        <ul className="nav">
          <NavLink to="/about"><li className="nav-item">About</li></NavLink>
          <NavLink to="/resume"><li className="nav-item">Resume</li></NavLink>
          <NavLink to="/projects"><li className="nav-item">Projects</li></NavLink>
          <NavLink to="/contact"><li className="nav-item">Contact</li></NavLink>
        </ul>
        <h2 className="site-logo nav-item"><NavLink exact to="/">Mark Sweet</NavLink></h2>
      </header>
    )
  }
}



export default Header;
