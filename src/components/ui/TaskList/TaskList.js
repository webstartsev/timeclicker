import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({
  tasks = {},
  user = {},
  startTask = f => f,
  stopTask = f => f,
  onChangeDeadline = f => f
}) => {
  return (
    <div className="TaskList">
      <div className="TaskList-header">
        <div className="TaskList-col TaskList-col_type_name">Название</div>
        <div className="TaskList-groupe">
          <div className="TaskList-col">Действие</div>
          <div className="TaskList-col">Время</div>
          <div className="TaskList-col">Дейдлайн</div>
          <div className="TaskList-col">Разница</div>
        </div>
      </div>
      {Object.keys(tasks).map(id => (
        <TaskItem
          key={id}
          id={id}
          user={user}
          tasks={tasks}
          startTask={startTask}
          stopTask={stopTask}
          onChangeDeadline={onChangeDeadline}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.object,
  user: PropTypes.object,
  currentTaskId: PropTypes.string,
  onAction: PropTypes.func,
  onChangeDeadline: PropTypes.func
};

export default TaskList;
