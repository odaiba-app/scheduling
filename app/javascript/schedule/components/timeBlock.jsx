import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const TimeBlock = (props) => {

  const { block } = props;

  const [show, setShow] = useState(false);


  const handleClose = () => { setShow(false); }

  const handleShow = () => { setShow(true); }


  return (
    <>
      <div className="time-block" onClick={handleShow}>
        <p>{block + 1}</p>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Time Block</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This person {block + 1} </p>
          <p>Another person {block + 2} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default TimeBlock;
