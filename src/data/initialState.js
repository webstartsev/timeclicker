const initialState = {
  tasks: {
    '0175d1f0-a8c6-41bf-8d02-df5734d829a4': {
      title: 'Заявка на оплату',
      status: 'stop',
      time: 3590,
      deadline: 0,
      diff: 0,
      user: null,
      description: 'Нужно сделать заявку на оплату по фотошопу, за который вернули деньги 30000руб.'
    },
    '0175d1f0-a8c6-41bf-8d02-df5734123123d829a4': {
      title: 'sdfsdfsfsdf',
      status: 'stop',
      time: 0,
      deadline: 2,
      diff: 0,
      user: null
    },
    '0175d1f0-a8c6-41bf-8d02-df5734d85346769a4': {
      title: '23424234у 3',
      status: 'stop',
      time: 0,
      deadline: 15,
      diff: 0,
      user: null
    }
  },
  user: {
    name: 'Sergey Startsev',
    role: 'admin'
  },
  timerId: null,
  currentTask: null
};

export default initialState;
