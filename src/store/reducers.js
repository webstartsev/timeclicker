import C from '../helpers/constants';
import { v4 } from 'uuid';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case C.ADD_TASK:
      const { title, deadline } = action.payload;
      return {
        [v4()]: {
          title: title,
          status: 'stop',
          time: null,
          deadline: deadline || null,
          user: null
        }
      };
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
