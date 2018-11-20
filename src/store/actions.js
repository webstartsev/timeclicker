import C from '../helpers/constants';

export const addTask = (title, deadline) => {
  return {
    type: C.ADD_TASK,
    payload: {
      title: title,
      deadline: deadline
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
