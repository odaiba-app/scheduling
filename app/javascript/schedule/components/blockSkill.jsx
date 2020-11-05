import React, { useEffect } from 'react';
import parse from 'html-react-parser';

const BlockSkill = (props) => {

  const { icon, filterSkillIcons } = props;

  const className = filterSkillIcons.includes(icon) ? "active" : "";

  return (
    <div className={className}>
      {parse(icon)}
    </div>
    )
}

export default BlockSkill;
