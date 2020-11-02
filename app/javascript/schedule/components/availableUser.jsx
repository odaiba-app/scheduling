import React, { useEffect, useState } from 'react';

import { deleteAvailability } from '../actions/index';
import UserSkill from './skill'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const AvailableUser = (props) => {

  const { availability, username, block } = props;

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(availability);
  },[])

  const handleClick = () => {
    deleteAvailability(user.availability_id);
    setUser({})
    const timeBlock = document.getElementById(`${block.id}`);
    timeBlock.classList.remove('active');
  }

  return (
    <div className="available-user d-flex justify-content-between">
      <p>{user.username}</p>
      {user.skills ? user.skills.map( (skill, idx) => <UserSkill skill={skill} key={idx} />) : ''}
      {user.username === username  ? <FontAwesomeIcon className="availability-icon" icon={faTimesCircle} onClick={handleClick} /> : '' }
    </div>
    )
}

export default AvailableUser;
