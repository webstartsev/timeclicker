import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

export const Page404 = ({ location }) => (
  <PageTemplate>
    <div className="page-404">
      <h1>Resource not found at '{location.pathname}'</h1>
    </div>
  </PageTemplate>
);
