import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Background from './Components/Background'
import Contact from './Components/Contact'

import './index.css'

const App = () => {
  return (
    <div className='mx-96 mt-2'>
      <Navbar />
      <Intro />
      {/* <Background />
      <Contact /> */}
    </div>
  )
}

export default App
