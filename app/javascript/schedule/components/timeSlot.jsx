import React from 'react';

const TimeSlot = (props) => {

  const { time } = props;
  return (
    <div className="time-slot">
      <p>{time}</p>
    </div>
    )
}

export default TimeSlot;
