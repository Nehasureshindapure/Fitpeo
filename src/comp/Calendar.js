import React, { useEffect, useState } from 'react';
import { calendarDays, calendarEvents } from '../data/appoint';

function Calendar() {
  const [days, setDays] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setDays(calendarDays);
    setEvents(calendarEvents);
  }, []);

  return (
    <div className="calendar">
      <h2>October 2021</h2>
      <div className="calendar-grid">
        {days.map((day, i) => (
          <div key={i} className="day">
            
            <span>{day.date}</span>
            <div className="slots">
              {day.times.map((t, j) => (
                <span key={j} className="slot">{t}</span> 
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="appointments">
        {events.map((event, i) => (
          <div key={i} className="appointment-card">
            <h4>{event.title}</h4>
            <p>{event.time}</p><i class="fa-solid fa-user-doctor"></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;

