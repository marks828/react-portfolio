import React, {Component} from 'react'

class Resume extends Component{
  render(){
    return(
      <div className="resume-container">
        <img src={require('../img/mark_sweet_resume.svg')} alt="" className="resume"/>
      </div>
    )
  }
}

export default Resume
