import React from 'react'
import './Projects.css'
import Webdesign from '../../assets/website-design.png'
import todos from '../../assets/todos.png'

function Projects() {
  return (
    <div id='Projects'>
        <div className="projects" id="">
      <div className="projects-logo">
        <h2>Projects</h2>
      </div>
      <div className="content">
        <div className="img1">
          <div className="one">
            <span>
            <h1>Portfolio Website</h1></span>
            <h1>Technologies</h1>
            <ul>
              <li>ReactJs</li>
              <li>CSS</li>
              
            </ul>
          </div>
        </div>
        <div className="img2">
            
          <div className="two">
            <span>
            <h1>Todos Application</h1></span>
            <h1>Technologies</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>BOOTSTRAP</li>
              <li>JAVASCRIPT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Projects