import React from 'react';
import './PageTemplate.css';

import { MainMenu } from '../MainMenu/MainMenu';

export const PageTemplate = ({ children }) => (
  <div className="PageTemplate">
    <MainMenu />
    <div className="PageTemplate-wrap">{children}</div>
  </div>
);
