import React from 'react';
import PropTypes from 'prop-types';
import './TaskDetail.css';

const TaskDetail = ({ task = {} }) => {
  return (
    <div className="TaskDetail">
      <div className="TaskDetail-title">{task.title}</div>
      <div className="TaskDetail-title">{task.status}</div>
      <div className="TaskDetail-title">{task.time}</div>
      <div className="TaskDetail-title">{task.diff}</div>
      <div className="TaskDetail-title">{task.deadline}</div>
      {task.user !== null && <div className="TaskDetail-title">{task.user.name}</div>}
    </div>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.object
};

export default TaskDetail;
