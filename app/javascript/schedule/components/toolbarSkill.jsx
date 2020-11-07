import React, { useState } from 'react';
import parse from 'html-react-parser';

import { updateUserSkill } from '../actions/index';

const ToolbarSkill = (props) => {

  const { skill, updateFilter } = props;

  const [ active, setActive ] = useState(skill.active);

  const handleClick = (e) => {
    const userSkill = e.currentTarget;
    updateUserSkill(userSkill.id);
  }

  const className = active ? "skill active" : "skill"

  return (
    <div className={className} onClick={handleClick} id={skill.id}>
      {parse(skill.skill.skill_icon)}
    </div>
    )
}

export default ToolbarSkill;
