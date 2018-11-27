import React from 'react';
import { PropTypes } from 'prop-types';
import DashboardGroup from '../DashboardGroup/DashboardGroup';

import './Dashboard.css';

const Dashboard = ({ taskGroup = {} }) => {
  return (
    <div className="Dashboard">
      {Object.keys(taskGroup).map(id => (
        <DashboardGroup key={id} date={id} group={taskGroup[id]} />
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  taskGroup: PropTypes.object
};

export default Dashboard;
