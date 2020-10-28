import React, { useState, useEffect } from 'react';

import TimeBlock from '../components/timeBlock';

const TimeBLockList = (props) => {

  const [timeBlocks, setTimeBlocks] = useState([]);

  const timeBlocksRange = [...Array(48).keys()]

  useEffect(() => {
    setTimeBlocks(timeBlocksRange);
  }, []);

  return (
      <tbody>
        { timeBlocks.map( (block, idx) => <TimeBlock block={block} key={idx} /> ) }
      </tbody>
    )
}

export default TimeBlockList;
