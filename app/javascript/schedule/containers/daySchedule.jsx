import React from 'react';

import TimeBlockList from './timeBlockList';

const DaySchedule = (props) => {
  const { day, userId, username } = props;

  return (
    <div className="day-container">
      <h3>{day}</h3>
      <TimeBlockList day={day} userId={userId} username={username} />
    </div>
    )
}

export default DaySchedule;
