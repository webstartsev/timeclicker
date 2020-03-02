import TYPES from '../actions/actionTypes';

const initialState = {
  timerId: null
};

export default function intervalReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.INTERVAL_START: {
      const { timerId } = action.payload;
      return {
        ...state,
        timerId
      };
    }
    case TYPES.INTERVAL_STOP: {
      return {
        ...state,
        timerId: null
      };
    }
    case TYPES.INTERVAL_TIKTAK: {
      const { id, time, curTime } = action.payload;
      const taskList = state.tasks;
      return {
        ...state,
        tasks: {
          ...taskList,
          [id]: {
            ...taskList[id],
            time: time
          }
        },
        currentTask: {
          ...taskList[id],
          time: time,
          curTime
        }
      };
    }
    default:
      return state;
  }
}
