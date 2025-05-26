import React from 'react';
import { schedule } from '../data/appoint';

function Schedule() {
  return (
    <div className="schedule">
      <h3>The Upcoming Schedule</h3>
      {schedule.map((day, i) => (
        <div key={i} className="schedule-day">
          <h4>{day.day}</h4>
          <ul>
            {day.items.map((item, j) => (
              <li key={j} className="schedule-card">
                <span className="dot" style={{ background: item.color }}></span>
                <span className="name">{item.name}</span>
                <span className="time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Schedule;