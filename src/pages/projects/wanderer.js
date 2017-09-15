import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wanderer extends Component{
  render(){
    const wandererDescription = "This is my UX project made during a one week intensive course. I used Sketch and Balsamiq for mockups and wireframes"
    return(
      <div className="projects">
        <img src={require("../../img/persona.png")} alt="" className="project-image" />
        <div className="project-description">
          <h2 className="project-name">Wanderer</h2>
          <p>{wandererDescription}</p>
          <p className="code"><Link to="https://marks828.github.io/wanderer" target="_blank">Site</Link> | <Link to="https://github.com/marks828/wanderer" target="_blank">Github</Link></p>
        </div>
      </div>
    )
  }
}

export default Wanderer
