import React, { useState } from 'react';
import parse from 'html-react-parser';

const ToolbarSkill = (props) => {

  const { skill } = props;

  const [ active, setActive ] = useState(false);

  const handleClick = () => { setActive(!active) }

  const className = active ? "skill active" : "skill"

  return (
    <div className={className} onClick={handleClick}>
      {parse(skill.icon)}
    </div>
    )
}

export default ToolbarSkill;
