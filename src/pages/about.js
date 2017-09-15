import React, {Component} from 'react';
import '../App.css';
import Skills from './skills/skills.js'
import Design from './skills/design.js'


class About extends Component{
  render(){
    return(
      <div>
        <div className="about-container">
          <img className="headshot" src={require("../img/chest-hs.jpg")} alt="" />
          <p className="about-paragraph">I am a web developer and UX designer with a love for art and creation. I graduated from General Assembly’s Web Development Immersive program where I learned how to create full-stack web applications from the ground up. With the help of my instructors, I learned and grew in confidence in my ability to create clean responsive websites.
          <br /><br />
            When I’m not creating websites, you can find me playing hockey, guitar, or catching up with friends over a few games of Destiny, League of Legends, or PUBG.
          </p>
        </div>

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
