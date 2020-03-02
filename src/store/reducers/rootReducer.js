import { combineReducers } from 'redux';
import initReducer from './init';
import taskReducer from './task';
import intervalReducer from './interval';
import authReducer from './auth';

export default combineReducers({
  init: initReducer,
  task: taskReducer,
  interval: intervalReducer,
  auth: authReducer
});
