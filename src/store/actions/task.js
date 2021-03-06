import TYPES from './actionTypes';
import TaskService from '../../services/task';
import DB from '../../services/db';

export const addTask = (title, deadline) => {
  const data = {
    title: title,
    deadline: deadline
  };
  const newTaskId = TaskService.addNewTask(data);
  return {
    type: TYPES.ADD_TASK,
    payload: {
      ...data,
      id: newTaskId
    }
  };
};

export const startTask = (id, user) => {
  return {
    type: TYPES.START_TASK,
    payload: {
      id: id,
      user: user,
      dateBegin: Date.parse(new Date())
    }
  };
};

export const stopTask = id => {
  return {
    type: TYPES.STOP_TASK,
    payload: {
      id: id,
      dateEnd: Date.parse(new Date())
    }
  };
};

export const setMyTasks = tasks => {
  console.log('tasks: ', tasks);
  return {
    type: TYPES.SET_MY_TASK,
    payload: {
      tasks
    }
  };
};

export const getTasks = userId => {
  return async dispatch => {
    const response = await DB.getTasks(userId);

    const tasks = [];

    if (response) {
      Object.keys(response).forEach(key => {
        tasks.push(response[key]);
      });
    }

    dispatch({
      type: TYPES.GET_TASKS,
      payload: {
        tasks
      }
    });
  };
};

export const getTask = taskId => {
  return async dispatch => {
    const response = await DB.getTask(taskId);

    let task = null;
    if (response) {
      Object.keys(response).forEach(key => {
        task = response[key];
      });
    }

    dispatch({
      type: TYPES.GET_TASK,
      payload: {
        task
      }
    });
  };
};
