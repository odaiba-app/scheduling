import React, { useState, useEffect } from 'react';

import DaySchedule from './daySchedule'

const WeekSchedule = (props) => {

  const { userId, username, userSkillIds } = props;
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
    <div className="week-container">
      { days.map( (day, idx) => <DaySchedule day={day} key={idx} userId={userId} username={username} userSkillIds={userSkillIds} /> )}
    </div>
    )
}

export default WeekSchedule;
