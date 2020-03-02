import TYPES from '../actions/actionTypes';

const initialState = {
  users: {},
  user: {
    id: 1,
    name: 'Sergey Startsev',
    role: 'admin',
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg'
  }
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SIGN_IN_REQUEST: {
      const { method } = action.payload;
      return {
        ...state,
        auth: {
          ...state.auth,
          method,
          status: 'request'
        }
      };
    }
    case TYPES.SIGN_IN_SUCCESS: {
      const { method, user } = action.payload;
      console.log('user: ', user);
      return {
        ...state,
        users: {
          ...state.users,
          [user.id]: user
        },
        auth: {
          ...state.auth,
          method,
          status: 'success',
          user
        }
      };
    }
    case TYPES.SIGN_IN_ERROR: {
      return {
        ...state,
        auth: {
          status: 'error'
        }
      };
    }
    default:
      return state;
  }
}
