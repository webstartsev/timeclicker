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
