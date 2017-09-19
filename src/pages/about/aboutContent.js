import React, {Component} from 'react'

class AboutSection extends Component{
  render(){
    const line1 = 'I am a web developer and UX designer with a love for art and creation. I graduated from General Assembly’s Web Development Immersive program where I learned how to create full-stack web applications from the ground up. With the help of my instructors, I learned and grew in confidence in my ability to create clean responsive websites.'

    const line2 = 'When I’m not creating websites, you can find me playing hockey, guitar, or catching up with friends over a few games of Destiny, League of Legends, or PUBG. '
    return(
      <div className="about-container">
        <img className="headshot" src={require("../../img/chest-hs.jpg")} alt="" />
        <p className="about-paragraph">
          {line1}
        <br /><br />
          {line2}
        </p>
      </div>
    )
  }
}

export default AboutSection
