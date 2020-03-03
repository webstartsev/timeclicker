import TYPES from '../actions/actionTypes';

const initialState = {
  task: null,
  tasks: [],
  taskHistory: [],
  currentTask: null
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TASK: {
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
            userCreated: state.auth.user.id
          },
          ...state.tasks
        }
      };
    }
    case TYPES.START_TASK: {
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
              user: state.auth.user.id
            },
            ...(state.taskHistory[id] || []) // на пустой {} - ошибка
          ]
        }
      };
    }
    case TYPES.STOP_TASK: {
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
    case TYPES.SET_MY_TASK: {
      const { tasks } = action.payload;
      return {
        ...state,
        tasks
      };
    }
    case TYPES.GET_TASKS: {
      const { tasks } = action.payload;
      return {
        ...state,
        tasks
      };
    }
    case TYPES.GET_TASK: {
      const { task } = action.payload;
      return {
        ...state,
        task
      };
    }
    default:
      return state;
  }
}
