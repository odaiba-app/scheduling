import React, { useState, useEffect } from 'react';

import DaySchedule from './daySchedule'
import TimeSlotList from '../containers/timeSlotList';

const WeekSchedule = (props) => {

  const { userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIcons } = props;
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

  const className = makeAvailable ? "week-container editable" : "week-container"

  return (
    <div className={className}>
      <TimeSlotList />
      { days.map( (day, idx) => <DaySchedule day={day} key={idx} userId={userId} username={username} filterSkillIcons={filterSkillIcons} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={selectBlock} /> )}
    </div>
    )
}

export default WeekSchedule;
