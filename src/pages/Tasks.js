import React from 'react';
import { PageTemplate } from '../components/ui/PageTemplate/PageTemplate';

import AddTaskForm from '../components/container/AddTaskForm/AddTaskForm';
import TaskList from '../components/container/TaskList/TaskList';
import CurrentTask from '../components/container/CurrentTask/CurrentTask';

export const Tasks = () => {
  return (
    <PageTemplate>
      <AddTaskForm />
      <TaskList />
      <CurrentTask />
    </PageTemplate>
  );
};
