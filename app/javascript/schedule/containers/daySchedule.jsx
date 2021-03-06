import React from 'react';

import TimeBlockList from './timeBlockList';

const DaySchedule = (props) => {
  const { day, userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIcons } = props;

  return (
    <div className="day-container">
      <h3>{day}</h3>
      <TimeBlockList day={day} userId={userId} username={username} filterSkillIcons={filterSkillIcons} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={selectBlock} />
    </div>
    )
}

export default DaySchedule;
