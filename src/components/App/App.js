import React from 'react';
import './App.css';

import AddTask from '../AddTask/AddTask';
import Tasks from '../Tasks/Tasks';
import Task from '../Task/Task';

const App = () => {
  return (
    <div className="App">
      <AddTask />
      <Tasks />
      <Task />
    </div>
  );
};

export default App;
