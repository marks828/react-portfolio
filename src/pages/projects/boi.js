import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Boi extends Component{
  render(){
    return(
      <div className="projects">
        <img src={require("../../img/boi.png")} alt="" className="project-image" />
        <div className="project-description">
          <h2 className="project-name">FeedMe</h2>
          <p>Find a restaurant near you!</p>
          <p className="code"><Link to="https://marks828.github.io/boi/" target="_blank">Site</Link> | <Link to="https://github.com/marks828/boi" target="_blank">Github</Link></p>
        </div>
      </div>
    )
  }
}

export default Boi
