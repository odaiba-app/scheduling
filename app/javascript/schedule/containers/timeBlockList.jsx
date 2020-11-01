import React, { useState, useEffect } from 'react';

import { fetchDay } from '../actions/index';

import TimeBlock from '../components/timeBlock';

const TimeBlockList = (props) => {

  const { day, userId, username, userSkillIds } = props;

  const [timeBlocks, setTimeBlocks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  // possible way of getting blocks for each column
  const timeBlocksRange = fetchDay(day.toLowerCase());

  // const timeBlocksRange = [...Array(36).keys()]

  useEffect(() => {
    timeBlocksRange.promise.then(r => setTimeBlocks(r));
    setIsLoaded(true);
  }, []);

  return (
      <div className="time-block-container">
        { isLoaded ? timeBlocks.map( (block, idx) => <TimeBlock block={block} day={day} key={idx} userId={userId} username={username} userSkillIds={userSkillIds} /> ) : '' }
      </div>
    )
}

export default TimeBlockList;
