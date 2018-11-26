import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './MemberShort.css';

const MemberShort = ({ user }) => (
  <div className="MemberShort">
    <div className="MemberShort-avatar">
      <img className="MemberShort-img" src={user.avatar} alt={user.avatar} />
    </div>
    <div className="MemberShort-name">
      <NavLink to={`/members/${user.id}/`}>{user.name}</NavLink>
    </div>
  </div>
);
MemberShort.propTypes = {
  user: PropTypes.object
};

export default MemberShort;
