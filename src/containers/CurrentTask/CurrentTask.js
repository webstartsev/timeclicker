import { connect } from 'react-redux';

import CurrentTask from '../../components/CurrentTask/CurrentTask';

const putStateToProps = state => {
  return {
    currentTask: state.task.currentTask
  };
};

export default connect(putStateToProps)(CurrentTask);
