import { combineReducers } from 'redux';
import initReducer from './init';
import taskReducer from './task';
import intervalReducer from './interval';
import authReducer from './auth';
import usersReducer from './users';

export default combineReducers({
  init: initReducer,
  task: taskReducer,
  interval: intervalReducer,
  auth: authReducer,
  users: usersReducer
});
