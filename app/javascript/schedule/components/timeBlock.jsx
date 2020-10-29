import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { AvailableUser } from './availableUser';
import { fetchBlock, createAvailability } from '../actions/index';

const TimeBlock = (props) => {

  const { block, day } = props;

  const [show, setShow] = useState(false);

  // possible way to get block info
  // const [blockInfo, setBlockInfo] = useState({});
  // const allowedBlockInfo = fetchBlock(block.id);
  // useEffect(() => {
  //   setBlockInfo(allowedBlockInfo);
  // }, []);

  // const handleSubmit = () => { createAvailability(id) }

  const handleClose = () => { setShow(false); }

  const handleShow = () => { setShow(true); }


  return (
    <>
      <div className="time-block" onClick={handleShow}>
        <p>{block + 1}</p>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="m-0" >{day} {block}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This person {block + 1} </p>
          <p>Another person {block + 2} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Make Available
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default TimeBlock;
