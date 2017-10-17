import React, {Component} from 'react'

class Design extends Component{
  render(){
    return(
      <div className="skills-container">
        <img src={require("../../img/devimg/sketch.png")} alt="sketch logo" className="skills-img" />
        <img src={require("../../img/devimg/photoshop.png")} alt="photoshop logo" className="skills-img" />
        <img src={require("../../img/devimg/illustrator.svg")} alt="illustrator logo" className="skills-img" />
        <img src={require("../../img/devimg/balsamiq.png")} alt="balsamiq logo" className="skills-img" />
        <img src={require("../../img/devimg/invision.png")} alt="invision logo" className="skills-img" />
      </div>
    )
  }
}

export default Design
