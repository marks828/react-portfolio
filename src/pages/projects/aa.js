import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Aa extends Component{
  render(){
    return(
      <div className="projects">
        <img src={require("../../img/aa.png")} alt="" className="project-image" />
        <div className="project-description">
          <h2 className="project-name">FeedMe</h2>
          <p>Find a restaurant near you!</p>
          <p className="code"><Link to="https://vimeo.com/118619200" target="_blank">Site</Link></p>
        </div>
      </div>
    )
  }
}

export default Aa
