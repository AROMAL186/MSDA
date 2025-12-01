import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Schedule from './components/Schedule'
import Instructors from './components/Instructors'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Instructors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

