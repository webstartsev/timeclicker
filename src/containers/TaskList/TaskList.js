import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  startTask,
  stopTask,
  intervalStart,
  intervalStop,
  intervalTikTak
} from '../../store/actions';

import TaskList from '../../components/TaskList/TaskList';

const putStateToProps = state => {
  return {
    tasks: state.tasks,
    user: state.user,
    timerId: state.timerId
  };
};

const putActionstoProps = dispatch => {
  return {
    startTask: bindActionCreators(startTask, dispatch),
    stopTask: bindActionCreators(stopTask, dispatch),
    intervalStart: bindActionCreators(intervalStart, dispatch),
    intervalStop: bindActionCreators(intervalStop, dispatch),
    intervalTikTak: bindActionCreators(intervalTikTak, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionstoProps
)(TaskList);
