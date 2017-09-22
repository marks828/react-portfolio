import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import Header from './pages/header.js'
import Home from './pages/home.js'
import Resume from './pages/resume.js'
import About from './pages/about.js'
import Projects from './pages/projects.js'
import Contact from './pages/contact.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
