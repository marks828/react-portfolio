import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Simpsons extends Component{
  render(){
    const simpsonsDescription = "This is my very first project while attending General Assembly. It's a simple trivia game made from HTML/CSS and jQuery. All the questions are about The Simpsons, and most from one episode."
    return(
      <div className="projects">
        <img src={require("../../img/simpsons.png")} alt="" className="project-image" />
        <div className="project-info">
          <h2 className="project-title">Simpsons Trivia</h2>
          <p className="project-description">{simpsonsDescription}</p>
          <p className="code"><Link to="https://marks828.github.io/project1/" target="_blank">Site</Link> | <Link to="https://github.com/marks828/project1" target="_blank">Github</Link></p>
        </div>
      </div>
    )
  }
}

export default Simpsons
