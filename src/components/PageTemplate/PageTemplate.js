import React from 'react';
import PropTypes from 'prop-types';

import './PageTemplate.css';

import { MainMenu } from '../MainMenu/MainMenu';
import CurrentTask from '../../containers/CurrentTask/CurrentTask';
import CurrentUser from '../../containers/CurrentUser/CurrentUser';

export const PageTemplate = ({ children = [] }) => (
  <div className="PageTemplate">
    <div className="PageTemplate-top">
      <div className="PageTemplate-wrapTop">
        <MainMenu />
        <CurrentUser />
      </div>
    </div>
    <div className="PageTemplate-wrap">
      {children}
      <CurrentTask />
    </div>
  </div>
);
PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
