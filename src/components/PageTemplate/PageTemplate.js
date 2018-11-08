import React from 'react';

import { MainMenu } from '../MainMenu/MainMenu';

export const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);
