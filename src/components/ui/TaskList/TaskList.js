import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({
  tasks = {},
  user = {},
  timerId = null,
  startTask = f => f,
  stopTask = f => f,
  intervalStart = f => f,
  intervalStop = f => f,
  intervalTikTak = f => f,
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
          timerId={timerId}
          startTask={startTask}
          stopTask={stopTask}
          intervalStart={intervalStart}
          intervalStop={intervalStop}
          intervalTikTak={intervalTikTak}
          onChangeDeadline={onChangeDeadline}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.object,
  user: PropTypes.object,
  timerId: PropTypes.number,
  startTask: PropTypes.func,
  stopTask: PropTypes.func,
  intervalStart: PropTypes.func,
  intervalStop: PropTypes.func,
  intervalTikTak: PropTypes.func,
  onChangeDeadline: PropTypes.func
};

export default TaskList;