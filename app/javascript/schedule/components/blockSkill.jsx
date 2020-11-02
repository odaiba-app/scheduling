import React from 'react';
import parse from 'html-react-parser';

const BlockSkill = (props) => {

  const { skill, userSkillIds } = props;

  const className = userSkillIds.includes(skill.skill_id) ? "active" : "";

  return (
    <div className={className}>
      {parse(skill.icon)}
    </div>
    )
}

export default BlockSkill;
