import React, { Component } from 'react';

import WeekSchedule from '../containers/weekSchedule';
import DaySlotList from '../containers/daySlotList';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello from React</h1>
        <DaySlotList />
        <WeekSchedule />
      </div>
    );
  }
}
