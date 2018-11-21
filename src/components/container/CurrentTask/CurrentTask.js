import { connect } from 'react-redux';

import CurrentTask from '../../ui/CurrentTask/CurrentTask';

const putStateToProps = state => {
  return {
    currentTask: state.currentTask
  };
};

export default connect(putStateToProps)(CurrentTask);
