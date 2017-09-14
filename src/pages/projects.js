import React, {Component} from 'react'
import {
  Route,
  NavLink,
  Redirect,} from 'react-router-dom'
import FeedMe from './projects/feedme.js'
import Wanderer from './projects/wanderer.js'
import Boi from './projects/boi.js'
import Simpsons from './projects/simpsons.js'
import Aa from './projects/aa.js'


class Projects extends Component{
  render(){
    return(
      <div className="project-div">
        <ul className="project-nav">
          <li className="project-name"><NavLink to="/projects/feedme">FeedMe</NavLink></li>
          <li className="project-name"><NavLink to="/projects/wanderer">Wanderer</NavLink></li>
          <li className="project-name"><NavLink to="/projects/boi">Boi</NavLink></li>
          <li className="project-name"><NavLink to="/projects/simpsons">Simpsons Trivia</NavLink></li>
          <li className="project-name"><NavLink to="/projects/aa">Anchor and Armor</NavLink></li>
        </ul>

        {/*ROUTES*/}
        <Route exact path='/projects' render={ () => <Redirect to='/projects/feedme' />}/>
        <Route path='/projects/feedme' component={FeedMe} />
        <Route path='/projects/wanderer' component={Wanderer} />
        <Route path='/projects/boi' component={Boi} />
        <Route path='/projects/simpsons' component={Simpsons} />
        <Route path='/projects/aa' component={Aa} />

      </div>
    )
  }
}

export default Projects;
