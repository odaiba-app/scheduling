import React from 'react';

import TimeBlockList from './timeBlockList';

const DaySchedule = (props) => {
  const { day, userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIds } = props;

  return (
    <div className="day-container">
      <h3>{day}</h3>
      <TimeBlockList day={day} userId={userId} username={username} filterSkillIds={filterSkillIds} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={selectBlock} />
    </div>
    )
}

export default DaySchedule;
