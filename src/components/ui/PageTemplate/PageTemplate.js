import React from 'react';
import PropTypes from 'prop-types';

import './PageTemplate.css';

import { MainMenu } from '../MainMenu/MainMenu';

export const PageTemplate = ({ children = [] }) => (
  <div className="PageTemplate">
    <MainMenu />
    <div className="PageTemplate-wrap">{children}</div>
  </div>
);
PageTemplate.propTypes = {
  children: PropTypes.array
};
