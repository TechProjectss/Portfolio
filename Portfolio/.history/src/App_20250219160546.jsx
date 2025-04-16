import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <h1>My Projects</h1>
        <p>Here are some of my projects:</p>
        <About />
      </div>
    </div>
  )
}

export default App