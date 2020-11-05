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
      filterSkillIcons: [],
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
    const AvailableButton = document.getElementById("available-button");
    if (this.state.makeAvailable) AvailableButton.classList.add('hidden-available-button')
  }

  selectBlock = (id, action) => {
    if (action === 'add') {
      this.setState({ availableBlockIds: [...this.state.availableBlockIds, id]})
    } else {
      const array = [...this.state.availableBlockIds];
      const idx = array.indexOf(id);
      array.splice(idx, 1);
      this.setState({availableBlockIds: array})
    }
    const selectedBlocks = document.querySelectorAll(".highlight");
    const AvailableButton = document.getElementById("available-button");
    selectedBlocks.length > 0 ? AvailableButton.classList.remove('hidden-available-button') : AvailableButton.classList.add('hidden-available-button')
  }

  updateFilter = (id, action) => {
    if (action === 'add') {
      this.setState({ filterSkillIcons: [...this.state.filterSkillIcons, id] })
    } else {
      const array = [...this.state.filterSkillIcons];
      const idx = array.indexOf(id);
      array.splice(idx, 1);
      this.setState({filterSkillIcons: array})
    }
  }

  render() {

    const { userId, username, userSkillIds, makeAvailable, availableBlockIds, filterSkillIcons } = this.state;

    return (
      <div className="app-container">
        <ToolBar updateUi={this.updateUi} availableBlockIds={availableBlockIds} updateFilter={this.updateFilter} />
        <WeekSchedule userId={userId} username={username} filterSkillIcons={filterSkillIcons} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={this.selectBlock} />
      </div>
    );
  }
}
