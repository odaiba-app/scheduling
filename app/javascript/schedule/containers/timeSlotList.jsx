import React, { useState, useEffect } from 'react';

import TimeSlot from '../components/timeSlot';

const TimeSlotList = (props) => {

  const [timeSlots, setTimeSlots] = useState([]);

  const allotedTimeSlots = () => {
    const slots = [];
    let h = 6;
    times (18) (() => {
      slots.push(`${h}:00`);
      slots.push(`${h}:30`);
      h += 1;
    })
    return slots
  }


  const times = x => f => {
    if (x > 0) {
      f()
      times (x - 1) (f)
    }
  }

  useEffect(() => {
    setTimeSlots(allotedTimeSlots());
  }, []);

  return (
      <div className="time-container">
        <h3>Time</h3>
        { timeSlots.map( (slot, idx) => <TimeSlot time={slot} key={idx} /> ) }
      </div>
    )
}

export default TimeSlotList;
