import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

import { updateUserSkill } from '../actions/index';

const ToolbarSkill = (props) => {

  const { skill, updateFilter } = props;

  const [userSkill, setUserSkill] = useState(skill)

  const [ active, setActive ] = useState('');

  useEffect(() => {
    setActive(userSkill.active);
  }, [userSkill])

  const handleClick = (e) => {
    console.log(userSkill);
    const userSkill = e.currentTarget;
    updateUserSkill(userSkill.id).promise.then(r => setUserSkill(r));
  }

  const className = active ? "skill active" : "skill"

  return (
    <div className={className} onClick={handleClick} id={skill.id}>
      {parse(userSkill.skill.skill_icon)}
    </div>
    )
}

export default ToolbarSkill;
