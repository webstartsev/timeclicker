import C from '../../../helpers/constants';
import { rootReducer } from '../../../store/reducers';
import { v4 } from 'uuid';

describe('task Reducer', () => {
  it('ADD_TASK success', () => {
    const id = 5;
    const state = {};
    const action = {
      type: C.ADD_TASK,
      payload: {
        title: 'Test task',
        deadline: 15
      }
    };
    const results = rootReducer(state, action);

    expect(results).toEqual({
      tasks: {
        [id]: {
          title: 'Test task',
          status: 'stop',
          time: 0,
          deadline: 15,
          user: null
        }
      }
    });
  });
  it('START_TASK success', () => {});
  it('STOP_TASK success', () => {});
});
