import React, { Component } from 'react';

import { fetchUser } from '../actions/index';

import WeekSchedule from '../containers/weekSchedule';
import TimeSlotList from '../containers/timeSlotList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      username: '',
      userSkillIds: []
    }
    fetchUser().promise.then(r => {
      this.setState({
      userId: r.id,
      username: r.username,
    });
      r.skills.forEach((skill) => {
        this.setState({
          userSkillIds: [...this.state.userSkillIds, skill.skill_id]
        })
      })
    });
  }

  render() {

    const { userId, username, userSkillIds } = this.state;

    return (
      <div className="app-container">
        <TimeSlotList />
        <WeekSchedule userId={userId} username={username} userSkillIds={userSkillIds} />
      </div>
    );
  }
}
