import TYPES from '../actions/actionTypes';

const initialState = {
  users: [],
  user: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_USERS: {
      const { users } = action.payload;
      return {
        ...state,
        users
      };
    }
    case TYPES.GET_USER: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    default:
      return state;
  }
}
