import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTask, stopTask, getTasks } from '../../store/actions/task';
import { intervalStart, intervalStop, intervalTikTak } from '../../store/actions/interval';

import TaskList from '../../components/TaskList/TaskList';

const putStateToProps = state => {
  console.log('state.task: ', state.task);
  return {
    tasks: state.task.tasks,
    user: state.auth.user,
    timerId: state.task.timerId
  };
};

const putActionstoProps = dispatch => {
  return {
    startTask: bindActionCreators(startTask, dispatch),
    stopTask: bindActionCreators(stopTask, dispatch),
    intervalStart: bindActionCreators(intervalStart, dispatch),
    intervalStop: bindActionCreators(intervalStop, dispatch),
    intervalTikTak: bindActionCreators(intervalTikTak, dispatch),
    getTasks: userId => dispatch(getTasks(userId))
  };
};

export default connect(putStateToProps, putActionstoProps)(TaskList);
