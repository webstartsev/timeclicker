import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskItem from '../../ui/TaskItem/TaskItem';

const putStateToProps = state => {
  return {
    title: state.title,
    deadline: state.deadline
  };
};

const putActionstoProps = dispatch => {
  return {
    addTask: bindActionCreators(addTask, dispatch)
  };
};

export default connect(
  putStateToProps,
  putActionstoProps
)(TaskItem);
