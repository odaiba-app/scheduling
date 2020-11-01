import React, { Component } from 'react';

import { fetchUser } from '../actions/index';

import WeekSchedule from '../containers/weekSchedule';
import ToolBar from '../containers/toolBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      username: '',
      userSkillIds: [],
      makeAvailable: false,
      availableBlockIds: []
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

  updateUi = () => {
    this.setState({
      makeAvailable: !this.state.makeAvailable,
      availableBlockIds: []
    });
    const selectedBlocks = document.querySelectorAll(".highlight");
    selectedBlocks.forEach( block => {
      block.classList.remove('highlight');
    })
  }

  selectBlock = id => {
    this.setState({ availableBlockIds: [...this.state.availableBlockIds, id]})
  }

  render() {

    console.log(this.state.availableBlockIds);

    const { userId, username, userSkillIds, makeAvailable } = this.state;

    return (
      <div className="app-container">
        <ToolBar updateUi={this.updateUi} />
        <WeekSchedule userId={userId} username={username} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={this.selectBlock} />
      </div>
    );
  }
}
