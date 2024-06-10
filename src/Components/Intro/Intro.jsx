import React from 'react'
import './Intro.css'

import JosephChirra from '../../assets/JosephChirra.jpeg'
import Home from '../Projects/Projects'
import resume from '../../assets/JosephChirraResume.pdf'
import gmaillogo from '../../assets/gmaillogo.jpg'
import linkedinlog from '../../assets/linkedinlog.webp'
import whatsapplogo from '../../assets/whatsapplogo.webp'

function Intro() {
  return (
    <div>
        <section id="Intro">
        
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Joseph Chirra</span><br />Website Designer</span>
                <p className='intropara'>I want to suceed in an environment of growth and excellence to meet my personal and organizational goals</p>
                <div className="home-content">
        <div className="social-media">
          <a href="mailto:josephchirra43@gmail.com" target='blank'
            ><img className='logo' src={gmaillogo} alt="gmail logo" />
          </a>
          <a href="https://www.linkedin.com/in/joseph-chirra/" target='blank'
            ><img className='logo' src={linkedinlog} alt="linkedin log" /></a>
          <a href="https://wa.me/919182306296?text=I would like to talk to you." target='blank'
            ><img className='logo' src={whatsapplogo} alt="whatsapp logo" /></a>
        </div>
        
      </div>
      <button src={resume} className='btn' >Download Resume</button>
            </div>
            <img src={JosephChirra} alt="Josephchirra" className='bg'/>
            <p></p>
        </section>
        
    </div>
  )
}

export default Intro