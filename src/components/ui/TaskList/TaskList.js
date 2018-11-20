import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({
  tasks = {},
  currentTaskId = {},
  onAction = f => f,
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
          tasks={tasks}
          onAction={onAction}
          currentTaskId={currentTaskId}
          onChangeDeadline={onChangeDeadline}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.object,
  currentTaskId: PropTypes.string,
  onAction: PropTypes.func,
  onChangeDeadline: PropTypes.func
};

export default TaskList;
