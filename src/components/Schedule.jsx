import React from 'react'
import './Schedule.css'

const Schedule = () => {
  const schedule = [
    { day: 'Monday', time: '4:00 PM - 5:00 PM', class: 'Ballet (Beginner)', instructor: 'Ms. Sarah' },
    { day: 'Monday', time: '5:30 PM - 6:30 PM', class: 'Hip-Hop (All Levels)', instructor: 'Mr. James' },
    { day: 'Tuesday', time: '4:00 PM - 5:00 PM', class: 'Jazz (Intermediate)', instructor: 'Ms. Emily' },
    { day: 'Tuesday', time: '6:00 PM - 7:00 PM', class: 'Contemporary (Advanced)', instructor: 'Ms. Sarah' },
    { day: 'Wednesday', time: '4:30 PM - 5:30 PM', class: 'Tap (Beginner)', instructor: 'Ms. Lisa' },
    { day: 'Wednesday', time: '6:00 PM - 7:00 PM', class: 'Ballet (Advanced)', instructor: 'Ms. Sarah' },
    { day: 'Thursday', time: '5:00 PM - 6:00 PM', class: 'Latin Dance (All Levels)', instructor: 'Mr. Carlos' },
    { day: 'Thursday', time: '6:30 PM - 7:30 PM', class: 'Hip-Hop (Advanced)', instructor: 'Mr. James' },
    { day: 'Friday', time: '4:00 PM - 5:00 PM', class: 'Jazz (Beginner)', instructor: 'Ms. Emily' },
    { day: 'Saturday', time: '10:00 AM - 11:00 AM', class: 'Ballet (All Levels)', instructor: 'Ms. Sarah' },
    { day: 'Saturday', time: '11:30 AM - 12:30 PM', class: 'Contemporary (Beginner)', instructor: 'Ms. Sarah' },
  ]

  const groupedSchedule = schedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = []
    }
    acc[item.day].push(item)
    return acc
  }, {})

  return (
    <section id="schedule" className="section schedule">
      <div className="container">
        <h2 className="section-title">Class Schedule</h2>
        <p className="section-subtitle">
          View our weekly schedule and find the perfect time for your dance journey.
        </p>
        
        <div className="schedule-container">
          {Object.entries(groupedSchedule).map(([day, classes]) => (
            <div key={day} className="schedule-day">
              <h3 className="day-name">{day}</h3>
              <div className="day-classes">
                {classes.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-time">{item.time}</div>
                    <div className="schedule-class">{item.class}</div>
                    <div className="schedule-instructor">{item.instructor}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule

