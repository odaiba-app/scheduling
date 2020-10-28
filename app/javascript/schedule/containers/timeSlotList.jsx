import React, { useState, useEffect } from 'react';

import TimeSlot from '../components/timeSlot';

const TimeSlotList = (props) => {

  const [timeSlots, setTimeSlots] = useState([]);

  const allotedTimeSlots = [
    '6:00',
    '6:30',
    '7:00',
    '7:30',
    '8:00',
    '8:30',
    '9:00'
  ]

  useEffect(() => {
    setTimeSlots(allotedTimeSlots);
  }, []);
  return (

    )
}

export default TimeSlotList;
