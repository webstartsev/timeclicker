import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskList from '../../ui/TaskList/TaskList';

const putStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const putActionstoProps = dispatch => {
  return {
    // addTask: bindActionCreators(addTask, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionstoProps
)(TaskList);
