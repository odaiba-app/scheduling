import React from 'react';
import { render } from 'react-dom';
import { SelectableGroup, createSelectable } from 'react-selectable';
import TimeBlock from '../components/timeBlock';
import { fetchDay } from '../actions/index';

const SelectableComponent = createSelectable(TimeBlock);

export default class TimeBlockList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedKeys: [],
      timeBlocks: []
    };
    fetchDay(this.props.day.toLowerCase()).promise.then(r => this.setState({timeBlocks: r}));
  }

  handleSelection = (selectedKeys) => {
    if (this.props.makeAvailable) {
      this.setState({selectedKeys: selectedKeys });
      console.log(selectedKeys);
    }
  }

  render () {

    const { day, userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIcons } = this.props;
    const { timeBlocks, selectedKeys } = this.state;
    return (
      <SelectableGroup onSelection={this.handleSelection}>
        {timeBlocks.map((item, i) => {
            let selected = selectedKeys.indexOf(item) > -1;
            return (
              <SelectableComponent key={i} selected={selected} selectableKey={item} block={item} day={day} filterSkillIcons={filterSkillIcons} userId={userId} username={username} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={selectBlock} >
                {item.time}
              </SelectableComponent>
            );
        })}
      </SelectableGroup>
    );
  }

}

// import React, { useState, useEffect } from 'react';

// import { fetchDay } from '../actions/index';

// import TimeBlock from '../components/timeBlock';

// const TimeBlockList = (props) => {

//   const { day, userId, username, userSkillIds, makeAvailable, selectBlock, filterSkillIcons } = props;

//   const [timeBlocks, setTimeBlocks] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     if (!isLoaded) {
//       fetchDay(day.toLowerCase()).promise.then(r => setTimeBlocks(r));
//       setIsLoaded(true);
//     }
//   }, []);

//   return (
//       <div className="time-block-container" id={day}>
//         { isLoaded ? timeBlocks.map( (block, idx) => <TimeBlock block={block} day={day} key={idx} filterSkillIcons={filterSkillIcons} userId={userId} username={username} userSkillIds={userSkillIds} makeAvailable={makeAvailable} selectBlock={selectBlock} /> ) : '' }
//       </div>
//     )
// }

// export default TimeBlockList;
