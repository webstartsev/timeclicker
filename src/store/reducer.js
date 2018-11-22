import C from '../helpers/constants';

export const rootReducer = (state, action) => {
  switch (action.type) {
    // TASKS reducers
    case C.ADD_TASK:
      const { title, deadline, id } = action.payload;
      return {
        ...state,
        tasks: {
          [id]: {
            title: title,
            status: 'stop',
            time: 0,
            deadline: deadline || null,
            user: null
          },
          ...state.tasks
        }
      };
    case C.START_TASK: {
      const { id, user } = action.payload;

      // TODO: Подумать
      const taskList = Object.keys(state.tasks).reduce((tasks, task) => {
        return { ...tasks, [task]: { ...state.tasks[task], status: 'stop', user: null } };
      }, {});

      return {
        ...state,
        tasks: {
          ...taskList,
          [id]: {
            ...taskList[id],
            status: 'play',
            user: user
          }
        },
        currentTask: {
          ...taskList[id],
          status: 'play',
          user: user
        }
      };
    }
    case C.STOP_TASK: {
      const { id } = action.payload;
      const taskList = state.tasks;
      return {
        ...state,
        tasks: {
          ...taskList,
          [id]: {
            ...taskList[id],
            status: 'stop',
            user: null
          }
        },
        currentTask: null
      };
    }

    // INTERVAL reducers
    case C.INTERVAL_START: {
      const { timerId } = action.payload;
      return {
        ...state,
        timerId
      };
    }
    case C.INTERVAL_STOP: {
      return {
        ...state,
        timerId: null
      };
    }
    case C.INTERVAL_TIKTAK: {
      const { id, time } = action.payload;
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
          time: time
        }
      };
    }

    default:
      return state;
  }
};

// export const task = (state = {}, action) => {
//   switch (action.type) {
//     case C.ADD_TASK:
//       return {
//         [v4()]: {
//           title: action.title,
//           status: 'stop',
//           time: null,
//           deadline: action.deadline || null,
//           user: null
//         }
//       };
//     case C.START_TASK:
//     case C.STOP_TASK:
//       return state.id !== action.id
//         ? state
//         : {
//             ...state,
//             status: action.status
//           };
//     default:
//       return state;
//   }
// };
// export const tasks = (state = {}, action) => {
//   switch (action.type) {
//     case C.ADD_TASK:
//       return [...state, task({}, action)];
//     case C.START_TASK:
//     case C.STOP_TASK:
//       return state.map(c => task(c, action));
//     default:
//       return state;
//   }
// };
