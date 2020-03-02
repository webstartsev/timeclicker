import TYPES from './actionTypes';
import DB from '../../services/db';

export const initState = () => async dispatch => {
  const initUsers = users => {
    dispatch({
      type: TYPES.INIT_USERS,
      payload: {
        users
      }
    });
  };

  const initTasks = tasks => {
    dispatch({
      type: TYPES.INIT_TASKS,
      payload: {
        tasks
      }
    });
  };

  dispatch({ type: TYPES.INIT_STATE });
  try {
    const users = await DB.getUsers();
    initUsers(users);

    const tasks = await DB.getMyTasks();
    initTasks(tasks);
  } catch (error) {
    console.log('error: ', error);
  }

  // const onRequest = () => {
  //   dispatch({
  //     type: TYPES.SIGN_IN_REQUEST
  //   });
  // };

  // const onSuccess = (method, user) => {
  //   dispatch({
  //     type: TYPES.SIGN_IN_SUCCESS,
  //     payload: {
  //       method,
  //       user: {
  //         id: user.uid,
  //         name: user.displayName,
  //         email: user.email,
  //         avatar: user.photoURL,
  //         role: ''
  //       }
  //     }
  //   });
  // };
  // const onError = (method, error) => {
  //   dispatch({
  //     type: TYPES.SIGN_IN_ERROR,
  //     payload: {
  //       method,
  //       error
  //     }
  //   });
  // };

  // onRequest();
  // try {
  //   const tasks = await DB.getMyTasks();
  //   return onSuccess(tasks);
  // } catch (error) {
  //   return onError(error);
  // }
};
