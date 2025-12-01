import React from 'react'
import './Footer.css'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Master School</span>
              <span className="logo-subtitle">of Dance</span>
            </div>
            <p className="footer-description">
              Inspiring passion for dance and nurturing talent in students of all ages.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
              <li><a href="#classes" onClick={(e) => { e.preventDefault(); scrollToSection('classes') }}>Classes</a></li>
              <li><a href="#schedule" onClick={(e) => { e.preventDefault(); scrollToSection('schedule') }}>Schedule</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li>📍 123 Dance Street, City, State 12345</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@masterschoolofdance.com</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="YouTube">▶️</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Master School of Dance Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

