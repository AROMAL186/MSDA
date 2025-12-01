import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">Master School</span>
            <span className="logo-subtitle">of Dance</span>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
            <li><a href="#classes" onClick={(e) => { e.preventDefault(); scrollToSection('classes') }}>Classes</a></li>
            <li><a href="#schedule" onClick={(e) => { e.preventDefault(); scrollToSection('schedule') }}>Schedule</a></li>
            <li><a href="#instructors" onClick={(e) => { e.preventDefault(); scrollToSection('instructors') }}>Instructors</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
          </ul>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

