import React from 'react'
import './Instructors.css'

const Instructors = () => {
  const instructors = [
    {
      name: 'Ms. Sarah Johnson',
      specialty: 'Ballet & Contemporary',
      experience: '15 years',
      bio: 'Professional dancer with extensive training in classical ballet and contemporary dance.',
      emoji: '🩰'
    },
    {
      name: 'Mr. James Martinez',
      specialty: 'Hip-Hop',
      experience: '12 years',
      bio: 'Award-winning hip-hop choreographer with performances worldwide.',
      emoji: '🎵'
    },
    {
      name: 'Ms. Emily Chen',
      specialty: 'Jazz',
      experience: '10 years',
      bio: 'Passionate jazz instructor specializing in technique and performance.',
      emoji: '✨'
    },
    {
      name: 'Ms. Lisa Anderson',
      specialty: 'Tap',
      experience: '18 years',
      bio: 'Master tap dancer with Broadway experience and teaching expertise.',
      emoji: '👞'
    },
    {
      name: 'Mr. Carlos Rodriguez',
      specialty: 'Latin Dance',
      experience: '14 years',
      bio: 'Professional Latin dancer bringing authentic rhythms and passion to every class.',
      emoji: '🌺'
    }
  ]

  return (
    <section id="instructors" className="section instructors">
      <div className="container">
        <h2 className="section-title">Meet Our Instructors</h2>
        <p className="section-subtitle">
          Our talented and experienced instructors are dedicated to helping you achieve your dance goals.
        </p>
        
        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <div key={index} className="instructor-card">
              <div className="instructor-avatar">
                <div className="avatar-emoji">{instructor.emoji}</div>
              </div>
              <h3 className="instructor-name">{instructor.name}</h3>
              <p className="instructor-specialty">{instructor.specialty}</p>
              <p className="instructor-experience">{instructor.experience} of experience</p>
              <p className="instructor-bio">{instructor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors

