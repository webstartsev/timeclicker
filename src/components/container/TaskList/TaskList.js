import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTask, stopTask } from '../../../store/actions';

import TaskList from '../../ui/TaskList/TaskList';

const putStateToProps = state => {
  return {
    tasks: state.tasks,
    user: state.user
  };
};

const putActionstoProps = dispatch => {
  return {
    startTask: bindActionCreators(startTask, dispatch),
    stopTask: bindActionCreators(stopTask, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionstoProps
)(TaskList);
