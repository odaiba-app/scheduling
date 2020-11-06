import React, { useState, useEffect } from 'react';

import { createAvailability, fetchSkills, deleteAvailabilityFromTimeBlock } from '../actions/index';
import ToolbarSkill from '../components/toolbarSkill';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ToolBar = (props) => {

  const { updateUi, availableBlockIds, updateFilter, nonAvailableBlockIds } = props;

  const [ show, setShow ] = useState(false);

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills().promise.then(r => setSkills(r))
  }, [])

  const handleOpen = () => {
    setShow(true);
    updateUi();
  }

  const handleClose = () => {
    setShow(false);
    updateUi();
  }

  const handleSubmissions = () => {
    const selectedBlocks = document.querySelectorAll(".highlight");
    if (availableBlockIds.length > 0 ) {
      availableBlockIds.forEach( id => { createAvailability(id); })
      selectedBlocks.forEach( block => {
        block.classList.remove('highlight');
        block.classList.add('active');
      })
    }
    if (nonAvailableBlockIds.length > 0 ) {
      nonAvailableBlockIds.forEach( id => { deleteAvailabilityFromTimeBlock(id); })
      selectedBlocks.forEach( block => {
        block.classList.remove('highlight');
        block.classList.remove('active');
      })
    }
    setShow(false);

    updateUi();
  }

  const icon = show ? faChevronLeft : faChevronRight;
  const click = show ? handleClose : handleOpen;
  const className = show ? "toolbar active" : "toolbar";

  return (
      <div className="toolbar-container">
        <div className={className}>
          <div className="toolbar-contents">
            <div className="header">
              <h4>Set Your Availabilities</h4>
              <div className="hidden-available-button btn btn-secondary" id="available-button" onClick={handleSubmissions}>
                Make Available
              </div>
              <div className="hidden-available-button btn btn-secondary mt-3" id="remove-available-button" onClick={handleSubmissions}>
                Remove Availability
              </div>
            </div>
            <div className="skills">
              <h4>Filter</h4>
              {skills.map((skill, idx) => <ToolbarSkill skill={skill} key={idx} updateFilter={updateFilter} />)}
            </div>
          </div>
        </div>
        <div className="toolbar-button" onClick={click}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      </div>
    )
}

export default ToolBar;
