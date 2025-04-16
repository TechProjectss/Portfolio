import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/contact'
import Programs from './components/Program/Programs'
import Projects from './components/Projects/Project'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Projects />
      <Contact />
    </div>
  )
}

export default App