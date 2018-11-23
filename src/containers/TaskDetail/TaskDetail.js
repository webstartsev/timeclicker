import { connect } from 'react-redux';
import TaskDetail from '../../components/TaskDetail/TaskDetail';

const putStateToProps = (state, props) => {
  const tasks = state.tasks;
  const id = props.match.params.id;
  return {
    task: tasks[id]
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
)(TaskDetail);
