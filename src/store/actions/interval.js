import TYPES from './actionTypes';

export const intervalStart = timerId => {
  return {
    type: TYPES.INTERVAL_START,
    payload: {
      timerId
    }
  };
};

export const intervalStop = timerId => {
  return {
    type: TYPES.INTERVAL_STOP,
    payload: {
      timerId
    }
  };
};

export const intervalTikTak = (id, time, curTime) => {
  return {
    type: TYPES.INTERVAL_TIKTAK,
    payload: {
      id,
      time,
      curTime
    }
  };
};
