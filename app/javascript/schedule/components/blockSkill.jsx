import React from 'react';
import parse from 'html-react-parser';

const BlockSkill = (props) => {

  const { skill, userSkillIds, filterSkillIds } = props;

  // const className = userSkillIds.includes(skill.skill_id) ? "active" : "";

  const className = filterSkillIds.includes(skill.skill_id) ? "active" : "";

  console.log(filterSkillIds);

  return (
    <div className={className}>
      {parse(skill.icon)}
    </div>
    )
}

export default BlockSkill;