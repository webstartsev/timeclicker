import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard/Dashboard';

import { getFullDate, getTime, secToTime } from '../../helpers/function';

const putStateToProps = state => {
  const userId = parseInt(state.user.id);
  const allHistory = state.taskHistory;
  const allTasks = state.tasks;

  const taskGroup = {};

  // Группируем задачи по дате начала выполнения
  Object.keys(allHistory).forEach(id => {
    const group = {};

    allHistory[id].forEach(history => {
      if (history.user === userId) {
        const date = getFullDate(history.dateBegin);

        const res = [
          {
            id: id,
            title: allTasks[id].title,
            time: secToTime(history.time),
            dateBegin: getTime(history.dateBegin),
            dateEnd: getTime(history.dateEnd)
          },
          ...(group[date] || [])
        ];
        group[date] = res;
      }
    });
    console.log('group: ', group);
    // // TODO: вернуть новый объект
    // const res = Object.keys(group).map(date => {
    //   return {
    //     [date]: [...group[date], ...(taskGroup[date] || [])]
    //   };
    // });

    // const ressss = {};

    // // console.log('res: ', res);

    Object.keys(group).forEach(date => {
      taskGroup[date] = [...group[date], ...(taskGroup[date] || [])];
    });
  });
  console.log('taskGroup: ', taskGroup);

  return {
    taskGroup: taskGroup
  };
};

export default connect(putStateToProps)(Dashboard);
