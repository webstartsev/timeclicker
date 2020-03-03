import { combineReducers } from 'redux';
import taskReducer from './task';
import intervalReducer from './interval';
import authReducer from './auth';
import usersReducer from './users';

export default combineReducers({
  task: taskReducer,
  interval: intervalReducer,
  auth: authReducer,
  users: usersReducer
});
