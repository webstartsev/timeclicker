import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

// import { secToTime } from '../../helpers/function';

export class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.beforeAction = this.beforeAction.bind(this);
  }
  // Если новый рейтинг остался таким же, как и в текущих свойствах,
  // то не надо обновлять компонент.
  shouldComponentUpdate(nextProps) {
    const { task } = this.props;
    if (task.status !== nextProps.task.status || task.time !== nextProps.time) {
      return true;
    } else {
      return false;
    }
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
    const { task, onChangeDeadline } = this.props;
    return (
      <div className="TaskItem" style={this.style}>
        <div className="TaskItem-title">{task.title}</div>
        <div className="TaskItem-action">
          {task.status !== 'play' && (
            <button onClick={() => beforeAction(task.id, 'play')} className="TaskItem-play">
              Play
            </button>
          )}
          {task.status === 'play' && (
            <button onClick={() => beforeAction(task.id, 'pause')} className="TaskItem-pause">
              Pause
            </button>
          )}
          <button onClick={() => beforeAction(task.id, 'stop')} className="TaskItem-stop">
            Stop
          </button>
        </div>
        <div className="TaskItem-time">
          {/* <div className="TaskItem-time">{time !== 0 && secToTime(time)}</div> */}
          <div className="TaskItem-deadline">
            <input
              type="text"
              ref="_deadline"
              defaultValue={task.deadline}
              onChange={onChangeDeadline}
            />
          </div>
          <div className="TaskItem-diff" />
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
