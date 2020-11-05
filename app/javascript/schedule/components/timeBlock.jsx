import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import BlockSkill from './blockSkill';
import AvailableUsersList from '../containers/availableUsersList';
import { fetchBlock, createAvailability } from '../actions/index';

const TimeBlock = (props) => {

  const { block, day, userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIds } = props;

  const [show, setShow] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);
  const [blockInfo, setBlockInfo] = useState(block);
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    organiseBlockState();
  }, [blockInfo]);

  const organiseBlockState = () => {
    const user_array = []
    const skill_array = []
    blockInfo.user_availabilities.forEach((user) => {
      user_array.push(user.username);
      user.skills.forEach((skill) => {
        skill_array.push(skill);
      })
    })
    const unique_icons = [...new Set(skill_array)];
    setUsers(user_array);
    setSkills(unique_icons);
    setInitialLoad(true);
  }

  // const handleSubmit = () => { createAvailability(block.id).promise.then(r => setBlockInfo(r)); }

  const handleClose = () => { setShow(false); }

  const handleShow = () => {
    fetchBlock(block.id).promise.then(r => setBlockInfo(r))
    setShow(true);
  }

  const handleHighlight = () => {
    const timeBlock = document.getElementById(`${block.id}`);
    timeBlock.classList.toggle('highlight');
    const action = timeBlock.classList.contains('highlight') ? 'add' : 'remove';
    selectBlock(timeBlock.id, action);
  }

  const blockClassName = users.includes(username) ? "time-block active" : "time-block";
  const click = makeAvailable ? handleHighlight : handleShow;

  return (
    <>
      <div className={blockClassName} id={block.id} onClick={click}>
        { users.length > 1 ? <FontAwesomeIcon className="multiple-availabilities-icon" size="1x" icon={faUsers} /> : '' }
        <p>{block.time}</p>
        <div className="block-icons">
          { skills.map((skill, idx) =>  <BlockSkill skill={skill} key={idx} filterSkillIds={filterSkillIds} userSkillIds={userSkillIds} /> ) }
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="m-0" >{block.time}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AvailableUsersList users={blockInfo} block={block} username={username} key={blockInfo.user_availabilities.length} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default TimeBlock;
