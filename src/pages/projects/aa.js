import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Aa extends Component{
  render(){
    const aaDesctiprion = "My friend's band was releasing an EP and wanted to record a simple video. At the time I was working with video and video editing with a friend so we decided we could help out. We recorded all the audio and got an extra person to help us shoot."
    return(
      <div className="projects">
        <img src={require("../../img/aa.png")} alt="" className="project-image" />
        <div className="project-info">
          <h2 className="project-title">Anchor and Armor</h2>
          <p className="project-description">{aaDesctiprion}</p>
          <p className="code"><Link to="https://vimeo.com/118619200" target="_blank">Site</Link></p>
        </div>
      </div>
    )
  }
}

export default Aa
