import React from 'react';
import PropTypes from 'prop-types';

import MemberShort from '../MemberShort/MemberShort';

import './MemberList.css';

const MemberList = ({ users }) => (
  <div className="MemberList">
    <h1 className="MemberList-name">Список пользователей</h1>
    {Object.keys(users).map(id => (
      <div key={id} className="MemberList-item">
        <MemberShort user={users[id]} />
      </div>
    ))}
  </div>
);
MemberList.propTypes = {
  users: PropTypes.object
};

export default MemberList;
