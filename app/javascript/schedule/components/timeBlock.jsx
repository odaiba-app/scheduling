import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import parse from 'html-react-parser';

import AvailableUsersList from '../containers/availableUsersList';
import { fetchBlock, createAvailability } from '../actions/index';

const TimeBlock = (props) => {

  const { block, day, userId, username } = props;

  const [show, setShow] = useState(false);
  const [blockInfo, setBlockInfo] = useState({user_availabilities: []});
  const [users, setUsers] = useState([]);
  const [icons, setIcons] = useState([]);

  const allowedBlockInfo = fetchBlock(block.id);

  useEffect(() => {
    allowedBlockInfo.promise.then(r => setBlockInfo(r));
    const user_array = []
    const icon_array = []
    blockInfo.user_availabilities.forEach((user) => {
      user_array.push(user.username);
      user.skills.forEach((skill) => {
        icon_array.push(skill.icon);
      })
    })
    const unique_icons = [...new Set(icon_array)];
    setUsers(user_array);
    setIcons(unique_icons);
  }, [blockInfo.user_availabilities.length]);

  const handleSubmit = () => { createAvailability(block.id).promise.then(r => setBlockInfo(r)); }

  const handleClose = () => { setShow(false); }

  const handleShow = () => { setShow(true); }

  const className = users.includes(username) ? "time-block active" : "time-block"
  return (
    <>
      <div className={className} id={block.id} onClick={handleShow}>
        <p>{block.time}</p>
        <div className="block-icons">
          { icons.map((icon) => parse(icon) ) }
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="m-0" >{block.time}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AvailableUsersList users={blockInfo} key={blockInfo.user_availabilities.length} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Make Available
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default TimeBlock;
