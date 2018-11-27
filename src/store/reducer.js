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
            id: id,
            title: title,
            status: 'stop',
            time: 0,
            deadline: deadline || null,
            user: null,
            userCreated: state.user.id
          },
          ...state.tasks
        }
      };
    case C.START_TASK: {
      const { id, user, dateBegin } = action.payload;

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
        },
        taskHistory: {
          ...state.taskHistory,
          [id]: [
            {
              dateBegin: dateBegin,
              dateEnd: null,
              user: state.user.id
            },
            ...(state.taskHistory[id] || []) // на пустой {} - ошибка
          ]
        }
      };
    }
    case C.STOP_TASK: {
      const { id, dateEnd } = action.payload;
      const taskList = state.tasks;
      const currentTask = state.currentTask;

      const lastHistory = {
        ...state.taskHistory[id][0],
        dateEnd: dateEnd,
        time: currentTask.curTime
      };
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
        currentTask: null,
        // Необходимо изменить последний taskHistory, чтобы добавить дату окончания
        taskHistory: {
          ...state.taskHistory,
          [id]: [lastHistory, ...state.taskHistory[id].slice(1, state.taskHistory[id].lenght)]
        }
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
