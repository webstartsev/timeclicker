import C from '../helpers/constants';
import TaskService from '../services/task';

export const addTask = (title, deadline) => {
  const data = {
    title: title,
    deadline: deadline
  }
  const newTaskId = await TaskService.addNewTask(data);
  return {
    type: C.ADD_TASK,
    payload: {
      ...data,
      id: newTaskId
    }
  };
};

export const startTask = (id, user) => {
  return {
    type: C.START_TASK,
    payload: {
      id: id,
      user: user
    }
  };
};

export const stopTask = id => {
  return {
    type: C.STOP_TASK,
    payload: {
      id: id
    }
  };
};

export const intervalStart = timerId => {
  return {
    type: C.INTERVAL_START,
    payload: {
      timerId
    }
  };
};

export const intervalStop = timerId => {
  return {
    type: C.INTERVAL_STOP,
    payload: {
      timerId
    }
  };
};

export const intervalTikTak = (id, time) => {
  return {
    type: C.INTERVAL_TIKTAK,
    payload: {
      id,
      time
    }
  };
};
