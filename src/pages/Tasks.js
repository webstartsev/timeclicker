import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

import AddTaskForm from '../containers/AddTaskForm/AddTaskForm';
import TaskList from '../containers/TaskList/TaskList';
import CurrentTask from '../containers/CurrentTask/CurrentTask';

export const Tasks = () => {
  return (
    <PageTemplate>
      <AddTaskForm />
      <TaskList />
      <CurrentTask />
    </PageTemplate>
  );
};
