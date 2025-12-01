import React from 'react'
import './Classes.css'

const Classes = () => {
  const danceClasses = [
    {
      name: 'Ballet',
      description: 'Classical ballet technique focusing on grace, posture, and precision.',
      icon: '🩰',
      level: 'All Levels',
      age: '5+'
    },
    {
      name: 'Contemporary',
      description: 'Modern dance combining elements of ballet, jazz, and modern techniques.',
      icon: '💫',
      level: 'Intermediate',
      age: '10+'
    },
    {
      name: 'Hip-Hop',
      description: 'High-energy urban dance style with freestyle and choreography.',
      icon: '🎵',
      level: 'All Levels',
      age: '8+'
    },
    {
      name: 'Jazz',
      description: 'Dynamic and expressive dance style with strong technique and style.',
      icon: '✨',
      level: 'All Levels',
      age: '7+'
    },
    {
      name: 'Tap',
      description: 'Rhythmic dance form creating percussive sounds with tap shoes.',
      icon: '👞',
      level: 'All Levels',
      age: '6+'
    },
    {
      name: 'Latin Dance',
      description: 'Salsa, Bachata, and other Latin dance styles with passion and flair.',
      icon: '🌺',
      level: 'All Levels',
      age: '12+'
    }
  ]

  return (
    <section id="classes" className="section classes">
      <div className="container">
        <h2 className="section-title">Our Dance Classes</h2>
        <p className="section-subtitle">
          Explore our diverse range of dance styles and find the perfect class for you.
        </p>
        
        <div className="classes-grid">
          {danceClasses.map((danceClass, index) => (
            <div key={index} className="class-card">
              <div className="class-icon">{danceClass.icon}</div>
              <h3 className="class-name">{danceClass.name}</h3>
              <p className="class-description">{danceClass.description}</p>
              <div className="class-info">
                <span className="class-level">{danceClass.level}</span>
                <span className="class-age">Age {danceClass.age}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes

