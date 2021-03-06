import React, {Component} from 'react';
import '../App.css';
import Skills from './skills/skills.js'
import Design from './skills/design.js'
import Contact from './contact.js'
import AboutSection from './about/aboutContent.js'



class About extends Component{
  render(){

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
