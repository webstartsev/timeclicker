import TYPES from '../actions/actionTypes';

const initialState = {
  users: []
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
    default:
      return state;
  }
}
