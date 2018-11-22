import C from '../../../helpers/constants';
import { rootReducer } from '../../../store/reducer';

describe('task Reducer', () => {
  it('ADD_TASK success', () => {
    const id = 5;
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

  it('START_TASK success', () => {
    const id = 5;
    const user = {
      name: 'Sergey Startsev',
      role: 'admin'
    };
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

  it('STOP_TASK success', () => {
    const id = 5;
    const user = {
      name: 'Sergey Startsev',
      role: 'admin'
    };
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
