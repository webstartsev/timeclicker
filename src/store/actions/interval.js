import C from '../../helpers/constants';

export const intervalStart = timerId => {
  return {
    type: C.INTERVAL_START,
    payload: {
      timerId
    }
  };
};

export const intervalStop = timerId => {
  return {
    type: C.INTERVAL_STOP,
    payload: {
      timerId
    }
  };
};

export const intervalTikTak = (id, time, curTime) => {
  return {
    type: C.INTERVAL_TIKTAK,
    payload: {
      id,
      time,
      curTime
    }
  };
};
