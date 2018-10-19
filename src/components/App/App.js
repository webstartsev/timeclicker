import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';

import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';

import dataTasks from '../../data/task';
import { secToTime } from '../../helpers/function';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: dataTasks,
      currentTask: null,
      time: 0
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
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        switch (action) {
          case 'play':
            this.startTask(task);
            break;
          case 'stop':
            this.stopTask();
            break;
          case 'pause':
            this.pauseTask();
            break;
          default:
            break;
        }
        console.log('this.state.time: ', this.state.time);
        return {
          ...task,
          status: action,
          time: this.state.time
        };
      } else {
        if (task.status === 'play') {
          return {
            ...task,
            status: 'pause'
          };
        }
      }
      return task;
    });

    this.setState({ tasks });
  }

  startTask(task) {
    let time = task.time;
    this.setState({ currentTask: task, time });

    this.timerId = setInterval(() => {
      let tiktak = time++;
      this.setState({ time: tiktak });
    }, 1000);
  }
  stopTask() {
    clearTimeout(this.timerId);
    this.setState({ currentTask: null });
  }
  pauseTask() {
    clearTimeout(this.timerId);
    this.setState({ currentTask: null });
  }

  changeDeadline(value) {
    console.log('value: ', value);
  }

  render() {
    const { tasks, time } = this.state;
    const { addTask, taskAction, changeDeadline } = this;
    return (
      <div className="App">
        <AddTask onSubmit={addTask} />
        <TaskList
          data={tasks}
          onAction={taskAction}
          time={time}
          onChangeDeadline={changeDeadline}
        />
        <div className="Timer">{time !== 0 && secToTime(time)}</div>
      </div>
    );
  }
}

export default App;
