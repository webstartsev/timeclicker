import C from '../helpers/constants';

export const addTask = data => {
  return {
    type: C.ADD_TASK,
    payload: {
      title: data.title,
      deadline: data.deadline
    }
  };
};
