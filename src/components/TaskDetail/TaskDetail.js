import React from 'react';
import PropTypes from 'prop-types';

import TaskHistory from '../../containers/TaskHistory/TaskHistory';

import './TaskDetail.css';

const TaskDetail = ({ task = {}, history = [] }) => {
  return (
    <div className="TaskDetail">
      <div className="TaskDetail-main">
        <div className="TaskDetail-detail">
          <h1 className="TaskDetail-title">{task.title}</h1>
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
      <div className="TaskDetail-bottom">
        {history.length !== 0 && (
          <div className="TaskDetail-history">
            <h3 className="TaskDetail-sectionTitle">История изменений</h3>
            {history.map((item, index) => (
              <TaskHistory key={index} item={item} deadline={task.deadline} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.object,
  history: PropTypes.array
};

export default TaskDetail;
