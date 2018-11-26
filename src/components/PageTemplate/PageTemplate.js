import React from 'react';
import PropTypes from 'prop-types';

import './PageTemplate.css';

import { MainMenu } from '../MainMenu/MainMenu';
import CurrentTask from '../../containers/CurrentTask/CurrentTask';

export const PageTemplate = ({ children = [] }) => (
  <div className="PageTemplate">
    <MainMenu />
    <div className="PageTemplate-wrap">
      {children}
      <CurrentTask />
    </div>
  </div>
);
PageTemplate.propTypes = {
  children: PropTypes.array
};
