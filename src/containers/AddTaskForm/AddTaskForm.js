import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions';

import AddTaskFrom from '../../components/AddTaskForm/AddTaskForm';

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
)(AddTaskFrom);
