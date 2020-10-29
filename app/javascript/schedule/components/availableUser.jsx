import React from 'react';

import { deleteAvailability } from '../actions/index';

const AvailableUser = (props) => {

  const { blockInfo } = props;

  const handleClick = () => {
    deleteAvailability(blockInfo.id, blockInfo.user.availability.id)
  }
  return (
    <div className="available-user">
      <p>User Name</p>
      <p>User Icons</p>
      <p onClick={handleClick}>Remove availability?</p>
    </div>
    )
}

export default AvailableUser;
