import React, {Component} from 'react'

class Resume extends Component{
  render(){
    return(
      <div className="resume-container">
        <img src={require('../img/testresume.svg')} alt="" className="resume"/>
      </div>
    )
  }
}

export default Resume
