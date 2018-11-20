import React from 'react';
import { PageTemplate } from '../components/PageTemplate/PageTemplate';

// import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
// import TaskList from '../components/TaskList/TaskList';
// import CurrentTask from '../components/CurrentTask/CurrentTask';

import AddTaskForm from '../components/container/AddTaskForm/AddTaskForm';
import TaskList from '../components/container/TaskList/TaskList';
// import CurrentTask from '../components/container/CurrentTask/CurrentTask';

export const Tasks = () => {
  return (
    <PageTemplate>
      <AddTaskForm />
      <TaskList />
      {/* <CurrentTask /> */}
      {/* <AddTaskForm />
      <TaskList />
      <CurrentTask /> */}
    </PageTemplate>
  );
};
