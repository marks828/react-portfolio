import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Simpsons extends Component{
  render(){
    return(
      <div className="projects">
        <img src={require("../../img/simpsons.png")} alt="" className="project-image" />
        <div className="project-description">
          <h2 className="project-name">FeedMe</h2>
          <p>Find a restaurant near you!</p>
          <p className="code"><Link to="https://marks828.github.io/project1/" target="_blank">Site</Link> | <Link to="https://github.com/marks828/project1" target="_blank">Github</Link></p>
        </div>
      </div>
    )
  }
}

export default Simpsons
