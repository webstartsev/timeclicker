import C from '../../helpers/constants';
import DB from '../../services/db';

DB.getCurrentUser();

export const initState = () => async dispatch => {
  // const initUser = user => {
  //   dispatch({
  //     type: C.INIT_USER,
  //     payload: {
  //       user
  //     }
  //   });
  // };

  const initTasks = tasks => {
    dispatch({
      type: C.INIT_TASKS,
      payload: {
        tasks
      }
    });
  };

  dispatch({ type: C.INIT_STATE });
  try {
    // const user = await DB.getCurrentUser();
    // initUser(user);

    const tasks = await DB.getMyTasks();
    return initTasks(tasks);
  } catch (error) {
    console.log('error: ', error);
  }

  // const onRequest = () => {
  //   dispatch({
  //     type: C.SIGN_IN_REQUEST
  //   });
  // };

  // const onSuccess = (method, user) => {
  //   dispatch({
  //     type: C.SIGN_IN_SUCCESS,
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
  //     type: C.SIGN_IN_ERROR,
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
