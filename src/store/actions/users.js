import TYPES from './actionTypes';
import DB from '../../services/db';

export const getUsers = () => {
  return async dispatch => {
    const users = await DB.getUsers();

    dispatch({
      type: TYPES.GET_USERS,
      payload: {
        users
      }
    });
  };
};

export const getUser = userId => {
  return async dispatch => {
    const response = await DB.getUser(userId);

    let user = null;
    if (response) {
      Object.keys(response).forEach(key => {
        user = response[key];
      });
    }

    dispatch({
      type: TYPES.GET_USER,
      payload: {
        user
      }
    });
  };
};
