import React, { Component } from 'react';

import { fetchUser } from '../actions/index';

import Filter from './filter';
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
      availableBlockIds: [],
      nonAvailableBlockIds: []
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
      availableBlockIds: [],
      nonAvailableBlockIds: []
    });
    const selectedBlocks = document.querySelectorAll(".highlight");
    selectedBlocks.forEach( block => {
      block.classList.remove('highlight');
    })
    // const availableButton = document.getElementById("available-button");
    // const removeAvailableButton = document.getElementById("remove-available-button");
    // if (this.state.makeAvailable) {
    //   availableButton.classList.add('hidden-available-button');
    //   removeAvailableButton.classList.add('hidden-available-button');
    // }
  }

  selectBlock = (id, action, active) => {
    active ? this.nonAvailableBlocks(id, action) : this.availableBlocks(id, action);
    // const selectedBlocks = document.querySelectorAll(".highlight");
    // const availableButton = document.getElementById("available-button");
    // const removeAvailableButton = document.getElementById("remove-available-button");
    // selectedBlocks.length > 0 ? availableButton.classList.remove('hidden-available-button') : availableButton.classList.add('hidden-available-button');
    // selectedBlocks.length > 0 ? removeAvailableButton.classList.remove('hidden-available-button') : removeAvailableButton.classList.add('hidden-available-button');

  }

  availableBlocks = (id, action) => {
    if (action === 'add') {
      this.setState({ availableBlockIds: [...this.state.availableBlockIds, id]})
    } else {
      const array = [...this.state.availableBlockIds];
      const idx = array.indexOf(id);
      array.splice(idx, 1);
      this.setState({availableBlockIds: array})
    }
  }

  nonAvailableBlocks = (id, action) => {
    if (action === 'add') {
      this.setState({ nonAvailableBlockIds: [...this.state.nonAvailableBlockIds, id]})
    } else {
      const array = [...this.state.nonAvailableBlockIds];
      const idx = array.indexOf(id);
      array.splice(idx, 1);
      this.setState({nonAvailableBlockIds: array})
    }
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

    const { userId, username, userSkillIds, makeAvailable, availableBlockIds, filterSkillIcons, nonAvailableBlockIds } = this.state;

    return (
      <div className="app-container">
        <ToolBar updateUi={this.updateUi} nonAvailableBlockIds={nonAvailableBlockIds} availableBlockIds={availableBlockIds} />
        <WeekSchedule userId={userId} username={username} filterSkillIcons={filterSkillIcons} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={this.selectBlock} />
        <Filter updateFilter={this.updateFilter} />
      </div>
    );
  }
}
