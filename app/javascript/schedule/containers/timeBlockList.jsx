import React, { useState, useEffect } from 'react';

import { fetchDay } from '../actions/index';

import TimeBlock from '../components/timeBlock';

const TimeBlockList = (props) => {

  const { day, userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIcons } = props;

  const [timeBlocks, setTimeBlocks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      fetchDay(day.toLowerCase()).promise.then(r => setTimeBlocks(r));
      setIsLoaded(true);
    }
  }, []);

  return (
      <div className="time-block-container" id={day}>
        { isLoaded ? timeBlocks.map( (block, idx) => <TimeBlock block={block} day={day} key={idx} filterSkillIcons={filterSkillIcons} userId={userId} username={username} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={selectBlock} /> ) : '' }
      </div>
    )
}

export default TimeBlockList;
