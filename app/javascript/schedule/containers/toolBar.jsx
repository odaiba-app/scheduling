import React, { useState, useEffect } from 'react';

import { createAvailability } from '../actions/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ToolBar = (props) => {

  const { updateUi, availableBlockIds } = props;

  const [ show, setShow ] = useState(false);

  const handleOpen = () => {
    setShow(true);
    updateUi();
  }

  const handleClose = () => {
    setShow(false);
    updateUi();
  }

  const handleSubmissions = () => {
    availableBlockIds.forEach( id => {
      createAvailability(id);
    })
  }

  const icon = show ? faChevronLeft : faChevronRight;
  const click = show ? handleClose : handleOpen;
  const className = show ? "toolbar active" : "toolbar";

  return (
      <div className="toolbar-container">
        <div className={className}>
          <h3>Set Your Availabilities</h3>
          <div className="hidden-available-button btn btn-secondary" id="available-button" onClick={handleSubmissions}>
            Make Available
          </div>
        </div>
        <div className="toolbar-button" onClick={click}>
          <FontAwesomeIcon icon={icon} />
        </div>

      </div>
    )
}

export default ToolBar;
