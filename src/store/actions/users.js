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
