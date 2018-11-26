import React from 'react';
import PropTypes from 'prop-types';

import './MemberDetail.css';

const MemberDetail = ({ user }) => (
  <div className="MemberDetail">
    <h1 className="MemberDetail-name">{user.name}</h1>
    <div className="MemberDetail-main">
      <div className="MemberDetail-avatar">
        <img className="MemberDetail-img" src={user.avatar} alt={user.avatar} />
      </div>
      <div className="MemberDetail-info">Роль: {user.role}</div>
    </div>
    <div className="MemberDetail-bottom">
      <h2>Список задач</h2>
      <div className="MemberDetail-tasks">{}</div>
    </div>
  </div>
);
MemberDetail.propTypes = {
  user: PropTypes.object
};

export default MemberDetail;
