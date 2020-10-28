import React, { useState, useEffect } from 'react';

import TimeBlock from '../components/timeBlock';

const TimeBlockList = (props) => {

  const [timeBlocks, setTimeBlocks] = useState([]);

  const timeBlocksRange = [...Array(36).keys()]

  useEffect(() => {
    setTimeBlocks(timeBlocksRange);
  }, []);

  return (
      <div className="time-block-container">
        { timeBlocks.map( (block, idx) => <TimeBlock block={block} key={idx} /> ) }
      </div>
    )
}

export default TimeBlockList;
