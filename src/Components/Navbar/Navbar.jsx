import React from 'react'
import './Navbar.css'
import JosephChirra from '../../assets/JosephChirra.jpeg'
import ContactImg from '../../assets/contact.png'
//import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div>
        <nav className="navbar">

            <div className="desktopMenu">
                <a href='#Intro'  className="desktopMenuItem">Home</a>
                <a href='#about' className="desktopMenuItem">About</a>
                <a href='#Skills' className="desktopMenuItem">Skills</a>
                <a href='#Projects' className="desktopMenuItem">Projects</a>
            </div>
            
        </nav>
        
    </div>
  )
}

export default Navbar