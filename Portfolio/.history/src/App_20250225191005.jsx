import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/contact'
import Programs from './components/Program/Programs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Contact />
    </div>
  )
}

export default App