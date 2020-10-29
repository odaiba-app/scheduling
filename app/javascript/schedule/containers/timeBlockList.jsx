import React, { useState, useEffect } from 'react';

import { fetchDay } from '../actions/index';

import TimeBlock from '../components/timeBlock';

const TimeBlockList = (props) => {

  const { day } = props;

  const [timeBlocks, setTimeBlocks] = useState([]);

  // possible way of getting blocks for each column
  // const timeBlocksRange = fetchDay(day);

  const timeBlocksRange = [...Array(36).keys()]

  useEffect(() => {
    setTimeBlocks(timeBlocksRange);
  }, []);

  return (
      <div className="time-block-container">
        { timeBlocks.map( (block, idx) => <TimeBlock block={block} day={day} key={idx} /> ) }
      </div>
    )
}

export default TimeBlockList;
