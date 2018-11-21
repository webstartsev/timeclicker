import React from 'react';
import { PageTemplate } from '../../components/PageTemplate/PageTemplate';

import CurrentTask from '../../components/container/CurrentTask/CurrentTask';

import './Home.css';

export const Home = () => (
  <PageTemplate>
    <h1>Time Clicker</h1>
    <CurrentTask />
  </PageTemplate>
);
