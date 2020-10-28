import React, { useState, useEffect } from 'react';

import DaySchedule from './daySchedule'

const WeekSchedule = (props) => {

  const [days, setDays] = useState([]);

  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  useEffect(() => {
    setDays(weekDays);
  }, []);

  return (
    <div>
      { days.map( (day, idx) => <DaySchedule day={day} key={idx} /> )}
    </div>
    )
}

export default WeekSchedule;
