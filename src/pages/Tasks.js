import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

import AddTaskForm from '../containers/AddTaskForm/AddTaskForm';
import TaskList from '../containers/TaskList/TaskList';

export const Tasks = () => (
  <PageTemplate>
    <AddTaskForm />
    <TaskList />
  </PageTemplate>
);
