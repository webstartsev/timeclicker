import React from 'react';
import PropTypes from 'prop-types';
import './TaskDetail.css';

const TaskDetail = ({ task = {} }) => {
  return (
    <div className="TaskDetail">
      <div className="TaskDetail-main">
        <div className="TaskDetail-detail">
          <div className="TaskDetail-title">{task.title}</div>
          <div className="TaskDetail-description">{task.description}</div>
        </div>
        <div className="TaskDetail-info">
          {task.user !== null && (
            <div className="TaskDetail-prop TaskDetail-prop_type_user">
              Исполнитель: <span className="TaskDetail-user">{task.user.name}</span>
            </div>
          )}
          <div className="TaskDetail-prop TaskDetail-prop_type_status">Статус: {task.status}</div>
          <div className="TaskDetail-prop TaskDetail-prop_type_time">
            Время по задаче: {task.time}
          </div>
          <div className="TaskDetail-prop TaskDetail-prop_type_diff">Разница: {task.diff}</div>
          <div className="TaskDetail-prop TaskDetail-prop_type_deadline">
            Дейдлайн: {task.deadline}
          </div>
        </div>
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.object
};

export default TaskDetail;
