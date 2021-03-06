import React, { useState, useEffect } from 'react';

import { createMultipleAvailabilities,
         createRecurringAvailabilities,
         fetchUserSkills,
         deleteAvailabilityFromTimeBlock
       } from '../actions/index';

import ToolbarSkill from '../components/toolbarSkill';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ToolBar = (props) => {

  const { updateUi, availableBlockIds, nonAvailableBlockIds } = props;
  const [ show, setShow ] = useState(false);
  const [skills, setSkills] = useState([]);
  const [initialLoad, setInitalLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) fetchUserSkills().promise.then(r => setSkills(r));
    if (nonAvailableBlockIds.length > 0 || availableBlockIds.length > 0) setInitalLoad(false);
  }, [availableBlockIds, nonAvailableBlockIds])

  const handleOpen = () => {
    setShow(true);
    updateUi();
  }

  const handleClose = () => {
    setShow(false);
    updateUi();
  }

  const handleNonRecurring = selectedBlocks => {
    createMultipleAvailabilities(availableBlockIds.flat());
    selectedBlocks.forEach( block => {
      block.classList.remove('highlight');
      block.classList.add('active');
    })
  }

  const handleRecurring = selectedBlocks => {
    createRecurringAvailabilities(availableBlockIds.flat());
    selectedBlocks.forEach( block => {
      block.classList.remove('highlight');
      block.classList.add('recurring');
    })
  }

  const handleRemoval = selectedBlocks => {
    nonAvailableBlockIds.flat().forEach( id => { deleteAvailabilityFromTimeBlock(id); })
    selectedBlocks.forEach( block => {
      block.classList.remove('highlight');
      block.classList.remove('active');
    })
  }

  const handleSubmissions = (e) => {
    const selectedBlocks = document.querySelectorAll(".highlight");
    if (availableBlockIds.length > 0 && e.target.id === 'available-button' ) {
      handleNonRecurring(selectedBlocks)
    } else if (availableBlockIds.length > 0 && e.target.id === 'recurring-button') {
      handleRecurring(selectedBlocks)
    }
    if (nonAvailableBlockIds.length > 0 ) {
      handleRemoval(selectedBlocks)
    }
    setShow(false);
    updateUi();
  }

  const icon = show ? faChevronLeft : faChevronRight;
  const click = show ? handleClose : handleOpen;
  const toolbarClassName = show ? "toolbar active" : "toolbar";
  const availableClassName = availableBlockIds.length > 0 ? "btn btn-secondary mt-3" : "hidden-available-button btn btn-secondary"
  const nonAvailableClassName = nonAvailableBlockIds.length > 0 ? "btn btn-secondary mt-3" : "hidden-available-button btn btn-secondary"
  const indicatorClassName = initialLoad && availableBlockIds.length < 1 && nonAvailableBlockIds.length < 1 ? "click-here-indicator" : "click-here-indicator-hidden"
  return (
      <div className="toolbar-container">
        <div className={toolbarClassName}>
          <div className="toolbar-contents">
            <div className="skills">
              <h4>Set Your Skills</h4>
              <div className="skill-container">
                {skills.map((skill, idx) => <ToolbarSkill skill={skill} key={idx} />)}
              </div>
            </div>
            <div className="schedule">
              <h4>Set Your Availabilities</h4>
              <div className={availableClassName} id="available-button" onClick={handleSubmissions}>
                Make Available
              </div>
              <div className={availableClassName} id="recurring-button" onClick={handleSubmissions}>
                Make Recurring
              </div>
              <div className={indicatorClassName}>
                <p>Click Here <i className="fas fa-long-arrow-alt-right"></i></p>
              </div>
              <div className={nonAvailableClassName} id="remove-available-button" onClick={handleSubmissions}>
                Remove Availability
              </div>
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
