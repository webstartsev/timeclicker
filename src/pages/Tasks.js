import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
import TaskList from '../components/TaskList/TaskList';
import CurrentTask from '../components/CurrentTask/CurrentTask';

export const Tasks = ({ props }) => {
  console.log('props: ', props);

  return (
    <PageTemplate>
      <AddTaskForm />
      <TaskList />
      <CurrentTask />
    </PageTemplate>
  );
};
