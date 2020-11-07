import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { fetchSkills } from '../actions/index';
import FilterSkill from './filterSkill';



const Filter = (props) => {

  const { updateFilter } = props;

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills().promise.then(r => setSkills(r))
  }, [])

  const handleClick = (e) => {
    const dropdown = e.currentTarget.parentNode;
    const skillList = dropdown.querySelector('.filter-skill-list');
    skillList.classList.toggle('hide');
  }

  return (
    <div className="fliter-component pr-2 pt-2 text-center">
      <div className="filter-dropdown" >
        <div className="filter-icon align-items-center shadow" onClick={handleClick}>
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <div className="filter-skill-list hide">
          {skills.map((skill, idx) => <FilterSkill skill={skill} key={idx} updateFilter={updateFilter} />)}
        </div>
      </div>
    </div>
    )
}

export default Filter;
