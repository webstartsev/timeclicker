import React from 'react';
import PropTypes from 'prop-types';
import './CurrentTask.css';

const CurrentTask = ({ currentTask = {}, time = '' }) => {
  return (
    <div className="CurrentTask">
      <div className="CurrentTask-wrapper">
        <div className="CurrentTask-title">{currentTask.title}</div>
        <div className="CurrentTask-time">{time}</div>
      </div>
    </div>
  );
};

CurrentTask.propTypes = {
  currentTask: PropTypes.object,
  time: PropTypes.string
};

export default CurrentTask;
