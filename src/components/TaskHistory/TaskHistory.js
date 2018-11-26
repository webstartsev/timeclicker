import React from 'react';
import PropTypes from 'prop-types';

import MemberShort from '../MemberShort/MemberShort';

import './TaskHistory.css';

const TaskHistory = ({ history }) => {
  const dateBegin = new Date(history.dateBegin);
  const dateEnd = new Date(history.dateEnd);
  return (
    <div className="TaskHistory">
      <div className="TaskHistory-times">
        <div className="TaskHistory-date">{`${dateBegin.getDate()}.${dateBegin.getMonth()}.${dateBegin.getFullYear()}`}</div>
        <div className="TaskHistory-time">{`${dateBegin.getHours()}:${dateBegin.getMinutes()} - ${dateEnd.getHours()}:${dateEnd.getMinutes()}`}</div>
      </div>
      {history.user !== null && <MemberShort user={history.user} />}
      <div className="TaskHistory-time">{history.time}</div>
      <div className="TaskHistory-deadline">{history.deadline}</div>
    </div>
  );
};

TaskHistory.propTypes = {
  history: PropTypes.object
};

export default TaskHistory;
