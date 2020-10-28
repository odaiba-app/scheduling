import React from 'react';

const TimeBlock = (props) => {

  const { block } = props;

  return (
    <tr>
      <td>{block + 1}</td>
    </tr>
    )
}

export default TimeBlock;
