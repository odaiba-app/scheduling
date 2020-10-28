import React, { Component } from 'react';

import WeekSchedule from '../containers/weekSchedule';
import TimeSlotList from '../containers/timeSlotList';

export default class App extends Component {

  render() {

    return (
      <div className="app-container">
        <TimeSlotList />
        <WeekSchedule />
      </div>
    );
  }
}
