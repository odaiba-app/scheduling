import React from 'react';
import parse from 'html-react-parser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserSkill = (props) => {

  const { skill } = props;

  return (
    <div className="skill d-flex justify-content-between">
      <p>{parse(skill.icon)}</p>
    </div>
    )
}

export default UserSkill;
