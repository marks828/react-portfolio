import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Aa extends Component{
  render(){
    const aaDesctiprion = "A video I shot for a friend\'s band"
    return(
      <div className="projects">
        <img src={require("../../img/aa.png")} alt="" className="project-image" />
        <div className="project-description">
          <h2 className="project-name">Anchor and Armor</h2>
          <p>{aaDesctiprion}</p>
          <p className="code"><Link to="https://vimeo.com/118619200" target="_blank">Site</Link></p>
        </div>
      </div>
    )
  }
}

export default Aa
