import C from '../../../helpers/constants';
import { rootReducer } from '../../../store/reducer';
import deepFreeze from 'deep-freeze';

const id = 5;
const user = {
  name: 'Sergey Startsev',
  role: 'admin'
};
const timerId = 5;

describe('task Reducer', () => {
  it('ADD_TASK', () => {
    const state = {};
    const action = {
      type: C.ADD_TASK,
      payload: {
        title: 'Test add task',
        deadline: 15,
        id
      }
    };
    const results = rootReducer(state, action);

    deepFreeze(state);
    deepFreeze(action);
    expect(results).toEqual({
      tasks: {
        [id]: {
          title: 'Test add task',
          status: 'stop',
          time: 0,
          deadline: 15,
          user: null
        }
      }
    });
  });

  it('START_TASK', () => {
    const state = {
      tasks: {
        [id]: {
          title: 'test start task',
          status: 'stop',
          time: 0,
          deadline: null,
          user: null
        }
      }
    };

    const action = {
      type: C.START_TASK,
      payload: {
        id,
        user
      }
    };

    const results = rootReducer(state, action);

    deepFreeze(state);
    deepFreeze(action);
    expect(results).toEqual({
      tasks: {
        [id]: {
          title: 'test start task',
          status: 'play',
          time: 0,
          deadline: null,
          user: user
        }
      },
      currentTask: {
        title: 'test start task',
        status: 'play',
        time: 0,
        deadline: null,
        user: user
      }
    });
  });

  it('STOP_TASK', () => {
    const state = {
      tasks: {
        [id]: {
          title: 'test stop task',
          status: 'play',
          time: 0,
          deadline: null,
          user: user
        }
      }
    };

    const action = {
      type: C.STOP_TASK,
      payload: {
        id
      }
    };

    const results = rootReducer(state, action);

    deepFreeze(state);
    deepFreeze(action);
    expect(results).toEqual({
      tasks: {
        [id]: {
          title: 'test stop task',
          status: 'stop',
          time: 0,
          deadline: null,
          user: null
        }
      },
      currentTask: null
    });
  });
});

describe('iteraion Reducer', () => {
  it('INTERVAL_START', () => {
    const state = {};
    const action = {
      type: C.INTERVAL_START,
      payload: {
        timerId
      }
    };
    const results = rootReducer(state, action);

    deepFreeze(state);
    deepFreeze(action);
    expect(results).toEqual({
      timerId: timerId
    });
  });

  it('INTERVAL_STOP', () => {
    const state = {};
    const action = {
      type: C.INTERVAL_STOP,
      payload: {
        timerId
      }
    };
    const results = rootReducer(state, action);

    deepFreeze(state);
    deepFreeze(action);
    expect(results).toEqual({
      timerId: null
    });
  });

  it('INTERVAL_TIKTAK', () => {
    const time = 100500;
    const state = {
      tasks: {
        [id]: {
          title: 'test interval tik-tak',
          status: 'play',
          time: 0,
          deadline: null,
          user: user
        }
      }
    };
    const action = {
      type: C.INTERVAL_TIKTAK,
      payload: {
        id,
        time
      }
    };
    const results = rootReducer(state, action);

    deepFreeze(state);
    deepFreeze(action);
    expect(results).toEqual({
      tasks: {
        [id]: {
          title: 'test interval tik-tak',
          status: 'play',
          time: time,
          deadline: null,
          user: user
        }
      },
      currentTask: {
        title: 'test interval tik-tak',
        status: 'play',
        time: time,
        deadline: null,
        user: user
      }
    });
  });
});
