import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import './DashboardItem.css';

const DashboardItem = ({ task }) => {
  return (
    <div className="DashboardItem">
      <NavLink to={`/tasks/${task.id}/`} className="DashboardItem-title">{task.title}</NavLink>
      <div className="DashboardItem-time">{`${task.dateBegin} - ${task.dateEnd}`}</div>
      <div className="DashboardItem-time">{task.time}</div>
    </div>
  );
};

DashboardItem.propTypes = {
  task: PropTypes.object
};

export default DashboardItem;
