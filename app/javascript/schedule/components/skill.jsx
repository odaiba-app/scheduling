import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserSkill = (props) => {

  const { skill } = props;

  return (
    <div className="skill d-flex justify-content-between">
      <p>{skill.skill}</p>
    </div>
    )
}

export default UserSkill;
