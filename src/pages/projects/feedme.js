import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class FeedMe extends Component{
  render(){
    const feedme = "Have you ever been hungry and didn't know where what you wanted? Feed Me is designed for you. Enter your location (address, city, state, or even country) and we will find restaurants around you!"
    return(
      <div className="projects">
        <img src={require("../../img/feedme.png")} alt="" className="project-image" />
        <div className="project-info">
          <h2 className="project-title">FeedMe</h2>
          <p className="project-description">{feedme}</p>
          <p className="code"><Link to="https://marks828.github.io/project3_angular/#/feedme" target="_blank">Site</Link> | <Link to="https://github.com/marks828/project3" target="_blank">Github</Link></p>
        </div>
      </div>
    )
  }
}

export default FeedMe
