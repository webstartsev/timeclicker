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
