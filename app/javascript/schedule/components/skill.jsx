import React from 'react';
import parse from 'html-react-parser';

const UserSkill = (props) => {

  const { skill } = props;

  return (
    <div className="skill">
      <p>{parse(skill.icon)}</p>
    </div>
    )
}

export default UserSkill;
