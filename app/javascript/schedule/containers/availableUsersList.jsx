import React, { useEffect, useState } from 'react';

// import { deleteAvailability } from '../actions/index';
import AvailableUser from '../components/availableUser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const AvailableUsersList = (props) => {

  const { users, username } = props;

  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    setAvailabilities(users.user_availabilities);
  },[])

  return (
    <>
      { availabilities.map( (user, idx) => <AvailableUser availability={user} username={username} key={idx} /> )}
    </>
    )
}

export default AvailableUsersList;
