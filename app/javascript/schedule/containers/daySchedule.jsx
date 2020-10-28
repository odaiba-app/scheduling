import React from 'react';

import TimeBlock from './timeBlockList';

const DaySchedule = (props) => {
  const { day } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{day}</th>
          </tr>
        </thead>
        <TimeBlockList />
      </table>
    </div>
    )
}

export default DaySchedule;
