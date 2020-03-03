import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

import TaskItem from '../TaskItem/TaskItem';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    this.props.getTasks(this.props.user.id);
  };

  render() {
    const {
      tasks,
      user,
      timerId,
      startTask,
      stopTask,
      intervalStart,
      intervalStop,
      intervalTikTak,
      onChangeDeadline
    } = this.props;
    console.log('tasks: ', tasks);
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
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            user={user}
            task={task}
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
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  user: PropTypes.object,
  timerId: PropTypes.number,
  startTask: PropTypes.func,
  stopTask: PropTypes.func,
  intervalStart: PropTypes.func,
  intervalStop: PropTypes.func,
  intervalTikTak: PropTypes.func,
  onChangeDeadline: PropTypes.func,
  getTasks: PropTypes.func
};

export default TaskList;
