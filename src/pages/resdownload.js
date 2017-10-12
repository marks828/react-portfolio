import React, {Component} from 'react'
import {Document} from 'react-pdf'

class ResDownload extends Component{
  render(){
    return(
      <div className="res_download">
        <a href=""><Document file="../img/marksweet_resume.pdf"/></a>
      </div>
    )
  }
}

export default ResDownload;
