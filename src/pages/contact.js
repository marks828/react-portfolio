import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Contact extends Component{
  render(){
    const email = <p className="email" >Marks828@gmail.com</p>
    const github = <a href="https://github.com/marks828" className="contact-link" target="_blank">Github</a>
    const linkedin = <a href="https://www.linkedin.com/in/mark-s-sweet/" className="contact-link" target="_blank">LinkedIn</a>
    return(
      <div>
        <p className="contact-p">If you want to see any of my work you can check out my projects page. You can also check out my code at {github}, or contact me through my email at {email}, or through {linkedin}</p>
      </div>
    )
  }
}

export default Contact;
