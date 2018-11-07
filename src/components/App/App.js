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
      taskList: dataTasks,
      currentTaskId: null,
      timerId: null,
      user: {
        name: 'Сергей Старцев'
      }
    };

    this.addTask = this.addTask.bind(this);
    this.taskAction = this.taskAction.bind(this);
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  addTask(value) {
    this.setState(prevState => ({
      taskList: {
        [v4()]: {
          title: value,
          status: 'stop',
          time: null,
          deadline: null,
          user: null
        },
        ...prevState.taskList
      }
    }));
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
  }

  startTask(id) {
    const { taskList, user, currentTaskId } = this.state;

    if (this.state.timerId !== null) {
      clearTimeout(this.state.timerId);
    }

    // Останавливаем текущую задачу
    if (currentTaskId !== null) {
      taskList[currentTaskId].status = 'stop';
      taskList[currentTaskId].user = null;
    }

    taskList[id].status = 'play';
    taskList[id].user = user.name;

    let time = taskList[id].time;
    const timerId = setInterval(() => {
      let tiktak = time++;

      this.setTitle(tiktak);
      this.setState({
        taskList: {
          ...this.state.taskList,
          [id]: {
            ...this.state.taskList[id],
            time: tiktak
          }
        }
      });
    }, 1000);

    this.setState({
      timerId: timerId,
      currentTaskId: id
    });
  }
  setTitle(tiktak) {
    document.title = secToTime(tiktak, true);
  }
  stopTask(id) {
    clearTimeout(this.state.timerId);

    const { taskList } = this.state;
    this.setState({
      currentTaskId: null,
      taskList: {
        ...taskList,
        [id]: {
          ...taskList[id],
          status: 'stop',
          user: null
        }
      }
    });
  }

  changeDeadline(value) {
    console.log('value: ', value);
  }

  render() {
    const { taskList, currentTaskId } = this.state;
    const { addTask, taskAction, changeDeadline } = this;
    return (
      <div className="App">
        <AddTask onSubmit={addTask} />
        <TaskList
          taskList={taskList}
          onAction={taskAction}
          currentTaskId={currentTaskId}
          onChangeDeadline={changeDeadline}
        />
        {currentTaskId && <CurrentTask currentTask={taskList[currentTaskId]} />}
      </div>
    );
  }
}

export default App;
