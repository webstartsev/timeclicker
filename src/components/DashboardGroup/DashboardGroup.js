import React from 'react';
import { PropTypes } from 'prop-types';
import DashboardItem from '../DashboardItem/DashboardItem';

import './DashboardGroup.css';

const DashboardGroupe = ({ group = {}, date = '' }) => {
  return (
    <div className="DashboardGroupe">
      <div className="DashboardGroupe-title">{date}</div>
      {Object.keys(group).map(id => (
        <DashboardItem key={id} task={group[id]} />
      ))}
    </div>
  );
};

DashboardGroupe.propTypes = {
  group: PropTypes.array,
  date: PropTypes.string
};

export default DashboardGroupe;
