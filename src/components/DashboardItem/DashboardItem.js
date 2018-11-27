import React from 'react';
import { PropTypes } from 'prop-types';

import './DashboardItem.css';

const DashboardItem = ({ task }) => {
  return (
    <div className="DashboardItem">
      <div className="DashboardItem-title">{task.title}</div>
      <div className="DashboardItem-time">{`${task.dateBegin} - ${task.dateEnd}`}</div>
      <div className="DashboardItem-time">{task.time}</div>
    </div>
  );
};

DashboardItem.propTypes = {
  task: PropTypes.object
};

export default DashboardItem;
