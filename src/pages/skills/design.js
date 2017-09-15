import React, {Component} from 'react'

class Design extends Component{
  render(){
    return(
      <div className="design-container">
        <img src={require("../../img/devimg/sketch.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/balsamiq.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/invision.png")} className="skills-img" />
      </div>
    )
  }
}

export default Design
