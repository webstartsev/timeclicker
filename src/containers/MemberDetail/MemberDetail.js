import { connect } from 'react-redux';

import MemberDetail from '../../components/MemberDetail/MemberDetail';

const putStateToProps = (state, props) => {
  const userId = parseInt(props.match.params.id);

  // TODO: Доделать список задач у пользотвателя
  const alltasks = state.tasks;

  // Получаем список задач выбранного пользователя
  const tasks = Object.keys(alltasks).reduce((object, id) => {
    if (alltasks[id].userCreated === userId) {
      return {
        ...object,
        [id]: alltasks[id]
      };
    }
    return object;
  }, {});

  return {
    user: state.users[userId],
    tasks
  };
};

export default connect(putStateToProps)(MemberDetail);
