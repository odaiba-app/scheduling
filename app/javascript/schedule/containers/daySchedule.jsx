import React from 'react';

import TimeBlockList from './timeBlockList';

const DaySchedule = (props) => {
  const { day } = props;
  return (
    <div className="day-container">
      <h3>{day}</h3>
      <TimeBlockList day={day} />
    </div>
    )
}

export default DaySchedule;
