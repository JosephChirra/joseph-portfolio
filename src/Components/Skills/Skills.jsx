import React from 'react'
import './Skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import reactjs from '../../assets/reactjs.png'
import bootstrap from '../../assets/Bootstrap.jpeg'
import sqlite from '../../assets/sqlite.jpeg'

function Skills() {
  return (
    <div>
        <div className="skills" id="Skills">  
      <div className="skills-logo">
        <h2>Skills</h2>
      </div>
      <div className="skills-content">
        <div className="skills-lang">
          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src={html} alt="css"
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>HTML</h3>
                </div>
            
            </div>
          </div>

          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src= {css}alt="css"
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>CSS</h3>
                </div>
            
            </div>
          </div>

          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src={js} alt="js"
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>JAVASVRIPT</h3>
                </div>
            
            </div>
          </div>

          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src= {python}alt=""
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>Python</h3>
                </div>
            
            </div>
          </div>


          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src={reactjs}alt=""
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>ReactJs</h3>
                </div>
            
            </div>
          </div>
          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src={bootstrap}alt="bootsrtap"
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>Bootstrap</h3>
                </div>
            
            </div>
          </div>

          <div className="column">
            <div className="inner">
                <div className="front">
                  <img
                  src={sqlite} alt=""
                  className="html"
                />
                </div>
                <div className="back">
                    <h3>SqLite</h3>
                </div>
            
            </div>
          </div>
          
      </div>
    </div>
    </div>
    </div>
  )
}

export default Skills