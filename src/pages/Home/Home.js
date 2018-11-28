import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';
import './Home.css';

import Dashboard from '../../containers/Dashboard/Dashboard';

export const Home = () => (
  <PageTemplate>
    <h1>Лента задач</h1>
    <Dashboard />
  </PageTemplate>
);
