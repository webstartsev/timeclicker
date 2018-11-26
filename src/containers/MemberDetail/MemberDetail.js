import { connect } from 'react-redux';

import MemberDetail from '../../components/MemberDetail/MemberDetail';

const putStateToProps = (state, props) => {
  const userId = props.match.params.id;

  // TODO: Доделать список задач у пользотвателя
  const alltasks = state.tasks;
  const tasks = Object.keys(alltasks).filter(id => {
    if (alltasks[id].user == userId) {
      return alltasks[id];
    }
  });
  return {
    user: state.users[userId]
  };
};

export default connect(putStateToProps)(MemberDetail);
