import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';
import CurrentTask from '../CurrentTask/CurrentTask';

import dataTasks from '../../data/task';
import { secToTime } from '../../helpers/function';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: dataTasks,
      currentTask: null,
      time: 0,
      timerId: null,
      user: 'Сергей Старцев'
    };

    this.addTask = this.addTask.bind(this);
    this.taskAction = this.taskAction.bind(this);
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  addTask(value) {
    const task = this._prepareTask(value);
    const tasks = [task, ...this.state.tasks];

    this.setState({ tasks });
  }

  _prepareTask(value) {
    return {
      id: v4(),
      title: value,
      status: 'stop',
      time: null,
      deadline: null
    };
  }

  taskAction(id, action) {
    switch (action) {
      case 'stop':
        this.stopTask(id);
        break;
      default:
        this.startTask(id);
        break;
    }

    // const tasks = this.state.tasks.map(task => {
    //   if (task.id === id) {
    //     switch (action) {
    //       case 'stop':
    //         this.stopTask();
    //         break;
    //       default:
    //         this.startTask(task);
    //         break;
    //     }

    //     return {
    //       ...task,
    //       status: action,
    //       time: this.state.time
    //     };
    //   } else {
    //     if (task.status === 'play') {
    //       return {
    //         ...task,
    //         status: 'stop'
    //       };
    //     }
    //   }
    //   return task;
    // });

    // this.setState({ tasks });
  }

  startTask(id) {
    const { tasks, user } = this.state;
    const task = tasks[id];

    let time = task.time;

    if (this.state.timerId !== null) {
      clearTimeout(this.state.timerId);
    }

    const timerId = setInterval(() => {
      let tiktak = time++;

      this.setTitle(tiktak);
      this.setState({
        tasks: {
          ...tasks,
          [id]: {
            ...tasks[id],
            status: 'play',
            user: user,
            time: tiktak
          }
        }
      });
    }, 1000);

    this.setState({
      timerId: timerId,
      currentTaskId: id,
      tasks: {
        ...tasks,
        [id]: {
          ...tasks[id],
          status: 'play',
          user: user
        }
      }
    });
  }
  setTitle(tiktak) {
    document.title = secToTime(tiktak, true);
  }
  stopTask() {
    clearTimeout(this.state.timerId);
    this.setState({ currentTask: null });
  }

  changeDeadline(value) {
    console.log('value: ', value);
  }

  render() {
    const { tasks, currentTask, user } = this.state;
    const { addTask, taskAction, changeDeadline } = this;
    return (
      <div className="App">
        <AddTask onSubmit={addTask} />
        <TaskList
          tasks={tasks}
          onAction={taskAction}
          currentTask={currentTask}
          user={user}
          onChangeDeadline={changeDeadline}
        />
        {currentTask && <CurrentTask currentTask={currentTask} />}
      </div>
    );
  }
}

export default App;
