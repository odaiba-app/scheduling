import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';


import { deleteAvailability } from '../actions/index';
import { inviteUserToCollab } from '../actions/index';
import UserSkill from './skill'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const AvailableUser = (props) => {

  const { availability, username, block } = props;

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(availability);
  },[])

  const handleCancel = () => {
    deleteAvailability(user.availability_id);
    setUser({})
    const timeBlock = document.getElementById(`${block.id}`);
    timeBlock.classList.remove('active');
  }

  const handleMail = () => {
    inviteUserToCollab(user.user_id).promise.then(r => {
      if (r.message === `Invitation to ${user.username} sent`) {
        swal({
          text: `Mail sent to ${user.username}`,
          icon: "success"
        });
      } else {
        swal({
          text: `Something went wrong`,
          icon: "error"
        });
      }
    });
  }

  const cancelButton = <FontAwesomeIcon className="availability-icon" icon={faTimesCircle} onClick={handleCancel} />
  const mailButton = <FontAwesomeIcon className="mail-icon" icon={faPaperPlane} onClick={handleMail} />

  return (
    <div className="available-user d-flex justify-content-between">
      <div className="availability-username col-3">
        <p>{user.username}</p>
      </div>
      <div className="user-skills d-flex justify-content-between col-6">
        {user.skills ? user.skills.map( (skill, idx) => <UserSkill skill={skill} key={idx} />) : ''}
      </div>
      <div className="user-cancel-button text-right col-3">
        {user.username === username  ? cancelButton : mailButton }
      </div>
    </div>
    )
}

export default AvailableUser;
