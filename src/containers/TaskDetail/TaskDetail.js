import { connect } from 'react-redux';
import TaskDetail from '../../components/TaskDetail/TaskDetail';

import { secToTime } from '../../helpers/function';

const putStateToProps = (state, props) => {
  const tasks = state.tasks;
  const history = state.taskHistory;
  const id = props.match.params.id;

  return {
    task: {
      ...tasks[id],
      time: secToTime(tasks[id].time)
    },
    history: history[id]
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
