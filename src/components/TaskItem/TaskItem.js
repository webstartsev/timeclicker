import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

import { secToTime, timeDiff } from '../../helpers/function';

export class TaskItem extends React.Component {
  render() {
    const { taskList, onAction, id } = this.props;
    const task = taskList[id];

    const diff = timeDiff(task.time, task.deadline);
    return (
      <div className="TaskItem">
        <div className="TaskItem-title">
          {task.title}
          {task.user !== null && <span className="TaskItem-user">{task.user}</span>}
        </div>
        <div className="TaskItem-detail">
          <div className="TaskItem-action">
            {task.status === 'play' ? (
              <button
                onClick={() => onAction(id, 'stop')}
                className="TaskItem-btn TaskItem_type_play"
              >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9 16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z" />
                  <path d="M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,480.1    C132.4,480.1,31.9,379.6,31.9,256S132.4,31.9,256,31.9S480.1,132.4,480.1,256S379.6,480.1,256,480.1z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => onAction(id, 'play')}
                className="TaskItem-btn TaskItem_type_stop"
              >
                <svg
                  height="511.99998pt"
                  viewBox="1 1 511.99998 511.99998"
                  width="511.99998pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m256 512c-141.386719 0-256-114.617188-256-256s114.613281-256 256-256 256 114.613281 256 256c-.167969 141.316406-114.683594 255.832031-256 256zm0-480c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm0 0" />
                  <path d="m208 368c-8.835938 0-16-7.164062-16-16v-192c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v192c0 8.835938-7.164062 16-16 16zm0 0" />
                  <path d="m304 368c-8.835938 0-16-7.164062-16-16v-192c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v192c0 8.835938-7.164062 16-16 16zm0 0" />
                </svg>
              </button>
            )}
          </div>
          <div className="TaskItem-times">
            <div className="TaskItem-time">{secToTime(task.time)}</div>
            <div className="TaskItem-deadline">{task.deadline}</div>
            <div className={diff < 0 ? 'TaskItem-diff TaskItem-diff_error' : 'TaskItem-diff'}>
              {task.deadline !== 0 && diff}
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
  user: PropTypes.string,
  currentTask: PropTypes.object
};

TaskItem.defaultProps = {
  task: {},
  onAction: f => f,
  user: '',
  currentTask: null
};

export default TaskItem;
