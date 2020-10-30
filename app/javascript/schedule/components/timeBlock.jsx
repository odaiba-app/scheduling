import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import AvailableUsersList from '../containers/availableUsersList';
import { fetchBlock, createAvailability } from '../actions/index';

const TimeBlock = (props) => {

  const { block, day } = props;

  const [show, setShow] = useState(false);
  const [blockInfo, setBlockInfo] = useState({user_availabilities: []});

  // possible way to get block info
  const allowedBlockInfo = fetchBlock(block.id);

  useEffect(() => {
    allowedBlockInfo.promise.then(r => setBlockInfo(r));
  }, [blockInfo.user_availabilities.length]);

  const handleSubmit = () => { createAvailability(block.id).promise.then(r => setBlockInfo(r)); }

  const handleClose = () => { setShow(false); }

  const handleShow = () => { setShow(true); }

  const className = blockInfo.user_availabilities.length > 0 ? "time-block active" : "time-block"

  return (
    <>
      <div className={className}id={block.id} onClick={handleShow}>
        <p>{block.time}</p>
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
