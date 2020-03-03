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

export const getTasks = () => {
  return async dispatch => {
    const tasks = await DB.getMyTasks();

    dispatch({
      type: TYPES.GET_TASKS,
      payload: {
        tasks
      }
    });
  };
};
