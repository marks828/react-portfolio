import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Boi extends Component{
  render(){
    const boiDescription = "This is a project I helped build with a UX student at General Assmbly. She created the design and I helped her with all the HTML/CSS."
    return(
      <div className="projects">
        <img src={require("../../img/boi.png")} alt="" className="project-image" />
        <div className="project-description">
          <h2 className="project-name">BOI</h2>
          <p>{boiDescription}</p>
          <p className="code"><Link to="https://marks828.github.io/boi/" target="_blank">Site</Link> | <Link to="https://github.com/marks828/boi" target="_blank">Github</Link></p>
        </div>
      </div>
    )
  }
}

export default Boi
