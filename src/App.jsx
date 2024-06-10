import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'


function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    </>
    
  )
}

export default App