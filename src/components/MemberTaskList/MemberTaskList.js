import React from 'react';
import PropTypes from 'prop-types';

import MemberTaskItem from '../MemberTaskItem/MemberTaskItem';

import './MemberTaskList.css';

const MemberTaskList = ({ tasks = [] }) => (
  <div className="TaskList">
    <div className="TaskList-header">
      <div className="TaskList-col TaskList-col_type_name">Название</div>
      <div className="TaskList-groupe">
        <div className="TaskList-col">Время</div>
        <div className="TaskList-col">Дейдлайн</div>
        <div className="TaskList-col">Разница</div>
      </div>
    </div>
    {tasks.map(task => (
      <MemberTaskItem key={task.id} id={task.id} task={task} />
    ))}
  </div>
);

MemberTaskList.propTypes = {
  tasks: PropTypes.array
};

export default MemberTaskList;
