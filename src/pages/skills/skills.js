import React, {Component} from 'react'

class Skills extends Component{
  render(){
    return(
      <div>
        <img src={require("../../img/devimg/html.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/css.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/js.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/jq.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/react.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/py.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/rb.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/rails.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/ang.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/sketch.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/balsamiq.png")} alt="" className="skills-img" />
        <img src={require("../../img/devimg/invision.png")} className="skills-img" />
      </div>
    )
  }
}

export default Skills
