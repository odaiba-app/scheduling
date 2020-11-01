import React, { Component } from 'react';

import { fetchUser } from '../actions/index';

import WeekSchedule from '../containers/weekSchedule';
import TimeSlotList from '../containers/timeSlotList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      username: ''
    }
    fetchUser().promise.then(r => this.setState({
      userId: r.id,
      username: r.username
    }));
  }

  render() {

    const { userId, username } = this.state;

    return (
      <div className="app-container">
        <TimeSlotList />
        <WeekSchedule userId={userId} username={username} />
      </div>
    );
  }
}
