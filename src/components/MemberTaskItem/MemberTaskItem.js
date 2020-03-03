import React from 'react';
import PropTypes from 'prop-types';
import './MemberTaskItem.css';

import { NavLink } from 'react-router-dom';
import { secToTime, timeDiff } from '../../helpers/function';

const MemberTaskItem = ({ task = {} }) => {
  const diff = timeDiff(task.time, task.deadline);
  return (
    <div className="TaskItem">
      <div className="TaskItem-title">
        <NavLink to={`/tasks/${task.id}/`}>{task.title}</NavLink>
        {task.user && <span className="TaskItem-user">{task.user.name}</span>}
      </div>
      <div className="TaskItem-detail">
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
};

MemberTaskItem.propTypes = {
  task: PropTypes.object
};

export default MemberTaskItem;
