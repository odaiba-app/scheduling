import React, { useState } from 'react';
import parse from 'html-react-parser';

const ToolbarSkill = (props) => {

  const { skill, updateFilter } = props;

  const [ active, setActive ] = useState(false);

  const handleClick = () => {
    setActive(!active);
    // const block = document.getElementById(`${skill.id}`)
    // const action = block.classList.contains('active') ? 'add' : 'remove';
    const action = active ? "remove" : "add";
    // updateFilter(skill.id, action);
    updateFilter(skill.icon, action);

  }

  const className = active ? "skill active" : "skill"

  return (
    <div className={className} onClick={handleClick} id={skill.id}>
      {parse(skill.icon)}
    </div>
    )
}

export default ToolbarSkill;
