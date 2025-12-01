import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Our Academy</h2>
        <p className="section-subtitle">
          We are dedicated to nurturing talent and inspiring passion for dance in students of all ages and skill levels.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At Master School of Dance Academy, we believe that dance is more than just movement—it's a form of expression, 
              a way to build confidence, and a path to personal growth. Our mission is to provide exceptional dance education 
              in a supportive and inspiring environment.
            </p>
            <p>
              With years of experience and a passion for teaching, we offer a comprehensive curriculum that covers various 
              dance styles, from classical ballet to contemporary, hip-hop, jazz, and more.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Students</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Expert Instructors</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Dance Styles</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="dance-icon">💃</div>
              <p>Dance Studio Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

