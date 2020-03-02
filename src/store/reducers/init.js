import TYPES from '../actions/actionTypes';

const initialState = {
  tasks: {},
  taskHistory: {},
  users: {},
  timerId: null,
  currentTask: null
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
    // INIT
    case TYPES.INIT_STATE: {
      return {
        ...state
      };
    }
    // case TYPES.INIT_TASKS: {
    //   const { tasks } = action.payload;
    //   return {
    //     ...state,
    //     tasks
    //   };
    // }
    case TYPES.INIT_USERS: {
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
