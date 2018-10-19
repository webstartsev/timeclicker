import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ data = [], onAction = f => f, time = 0, onChangeDeadline = f => f }) => {
  return (
    <div className="TaskList">
      {data.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onAction={onAction}
          time={time}
          onChangeDeadline={onChangeDeadline}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  data: PropTypes.array,
  onAction: PropTypes.func,
  time: PropTypes.number,
  onChangeDeadline: PropTypes.func
};

export default TaskList;
