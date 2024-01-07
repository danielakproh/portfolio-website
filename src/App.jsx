import React from 'react'

import Title from './Components/common/Title'

import Navbar from './Components/pages/Navbar'
import Intro from './Components/pages/Intro'
import Background from './Components/pages/Background'
import Projects from './Components/pages/Projects'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Footer from './Components/pages/Footer'

import './index.css'

const App = () => {
  return (
    <>
      <div className='mx-96'>
        <Navbar />
        <Intro />
        {/* ******************************************************* */}
        <Title frontText="My Journey" backgroundText="Background" />
        <Background />
        {/* ******************************************************* */}
        <Title frontText="My Works" backgroundText="Projects" />
        <Projects />
        {/* ******************************************************* */}
        <Title frontText="Know me more" backgroundText="About" />
        <About />
        {/* ******************************************************* */}
        <Title frontText="Get in Touch" backgroundText="Contact" />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
