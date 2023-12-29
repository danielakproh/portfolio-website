import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Background from './Components/Background'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import './index.css'

const App = () => {
  return (
    <div className='mx-96 mt-2'>
      <Navbar />
      <Intro />
      <Background />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
