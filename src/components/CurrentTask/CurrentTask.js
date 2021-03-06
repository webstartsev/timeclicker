import React from 'react';
import PropTypes from 'prop-types';
import './CurrentTask.css';

import { secToTime } from '../../helpers/function';

const CurrentTask = ({ currentTask = {} }) => {
  if (currentTask == null) {
    return true;
  } else {
    return (
      <div className="CurrentTask">
        <div className="CurrentTask-wrapper">
          <div className="CurrentTask-title">{currentTask.title}</div>
          <div className="CurrentTask-time">{secToTime(currentTask.time)}</div>
        </div>
      </div>
    );
  }
};

CurrentTask.propTypes = {
  currentTask: PropTypes.object
};

export default CurrentTask;
