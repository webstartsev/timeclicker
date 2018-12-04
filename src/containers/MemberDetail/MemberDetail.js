import { connect } from 'react-redux';

import MemberDetail from '../../components/MemberDetail/MemberDetail';

const putStateToProps = (state, props) => {
  console.log('props: ', props);
  const userId = props.match.params.id;
  console.log('props.match.params.id: ', props.match.params.id);
  console.log('userId: ', userId);

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
  console.log(state.users);
  return {
    user: state.users[userId],
    tasks
  };
};

export default connect(putStateToProps)(MemberDetail);
