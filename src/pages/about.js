import React, {Component} from 'react';
import '../App.css';
import Skills from './skills/skills.js'
import Design from './skills/design.js'
import {Link} from 'react-router-dom'
import Contact from './contact.js'
import AboutSection from './about/aboutContent.js'



class About extends Component{
  render(){
    const github = <a href="https://github.com/marks828" target="_blank">Github</a>


    return(
      <div>
        <AboutSection />
        <Contact />
        <hr className="about-hr" />
        <h2 className="skills-header">Dev Skills</h2>
        <Skills />
        <h2 className="skills-header">Design Skills</h2>
        <Design />
      </div>
    )
  }
}

export default About;
