import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

import { secToTime, timeDiff } from '../../helpers/function';

export class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.beforeAction = this.beforeAction.bind(this);
  }
  // Если новый рейтинг остался таким же, как и в текущих свойствах,
  // то не надо обновлять компонент.
  shouldComponentUpdate(nextProps) {
    const { task, currentTask } = this.props;

    if (task.status !== nextProps.task.status) {
      return true;
    }
    if (currentTask !== null) {
      if (currentTask.id === nextProps.task.id && currentTask.time !== nextProps.time) {
        // console.log('currentTask: ', currentTask);
        // console.log('nextProps: ', nextProps);
        // console.log('task: ', task);
        return true;
      }
    }

    return false;
  }

  beforeAction(id, action) {
    const { onAction } = this.props;
    switch (action) {
      // case 'play':
      //   const { _deadline } = this.refs;

      //   if (_deadline.value === '') {
      //     this.showError(_deadline);
      //     _deadline.focus();
      //   } else {
      //     this.removeError(_deadline);
      //     onAction(id, action);
      //   }
      //   break;
      default:
        onAction(id, action);
        break;
    }
  }

  showError(el) {
    el.classList.add('TaskItem-deadline_error');
  }
  removeError(el) {
    el.classList.remove('TaskItem-deadline_error');
  }

  render() {
    const { beforeAction } = this;
    const { task, currentTask, time } = this.props;
    console.log('currentTask: ', currentTask);

    const diff = timeDiff(task.time, task.deadline);
    return (
      <div className="TaskItem" style={this.style}>
        <div className="TaskItem-title">{task.title}</div>
        <div className="TaskItem-detail">
          <div className="TaskItem-action">
            {task.status !== 'play' ? (
              <button
                onClick={() => beforeAction(task.id, 'play')}
                className="TaskItem-btn TaskItem_type_play"
              >
                Play
              </button>
            ) : (
              <button
                onClick={() => beforeAction(task.id, 'stop')}
                className="TaskItem-btn TaskItem_type_stop"
              >
                Stop
              </button>
            )}
          </div>
          <div className="TaskItem-times">
            <div className="TaskItem-time">
              {currentTask !== null ? secToTime(time) : secToTime(task.time)}
            </div>
            <div className="TaskItem-deadline">{task.deadline}</div>
            <div className={diff < 0 ? 'TaskItem-diff TaskItem-diff_error' : 'TaskItem-diff'}>
              {diff}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object,
  onAction: PropTypes.func,
  time: PropTypes.number,
  onChangeDeadline: PropTypes.func
};

TaskItem.defaultProps = {
  task: {},
  onAction: f => f,
  time: 0,
  onChangeDeadline: f => f
};

export default TaskItem;
