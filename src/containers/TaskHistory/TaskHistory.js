import { connect } from 'react-redux';
import TaskHistory from '../../components/TaskHistory/TaskHistory';

import { secToTime, timeDiff } from '../../helpers/function';

const putStateToProps = (state, props) => {
  const users = state.users;

  const { item, deadline } = props;

  const history = {
    ...item,
    user: users[item.user],
    time: secToTime(item.time),
    deadline: timeDiff(item.time, deadline)
  };
  return {
    history
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
)(TaskHistory);
