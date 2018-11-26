const initialState = {
  tasks: {
    '0175d1f0-a8c6-41bf-8d02-df5734d829a4': {
      id: '0175d1f0-a8c6-41bf-8d02-df5734d829a4',
      title: 'Заявка на оплату',
      status: 'stop',
      time: 3590,
      deadline: 0,
      diff: 0,
      user: null,
      description: 'Нужно сделать заявку на оплату по фотошопу, за который вернули деньги 30000руб.'
    },
    '0175d1f0-a8c6-41bf-8d02-df5734123123d829a4': {
      id: '0175d1f0-a8c6-41bf-8d02-df5734123123d829a4',
      title: 'sdfsdfsfsdf',
      status: 'stop',
      time: 0,
      deadline: 2,
      diff: 0,
      user: null
    },
    '0175d1f0-a8c6-41bf-8d02-df5734d85346769a4': {
      id: '0175d1f0-a8c6-41bf-8d02-df5734d85346769a4',
      title: '23424234у 3',
      status: 'stop',
      time: 0,
      deadline: 15,
      diff: 0,
      user: null
    }
  },
  taskHistory: {
    '0175d1f0-a8c6-41bf-8d02-df5734d829a4': [
      {
        dateBegin: 1542983870390,
        dateEnd: 1542984363390,
        time: 493,
        user: 1,
        dealine: 0
      },
      {
        dateBegin: 1542983860390,
        dateEnd: 1542983870390,
        time: 10,
        user: 2,
        dealine: 0
      },
      {
        dateBegin: 1542983460390,
        dateEnd: 1542983860390,
        time: 400,
        user: 2,
        dealine: 0
      },
      {
        dateBegin: 1542983360390,
        dateEnd: 1542983460390,
        time: 100,
        user: 1,
        dealine: 0
      }
    ],
    '0175d1f0-a8c6-41bf-8d02-df5734d85346769a4': [
      {
        dateBegin: 1542983870390,
        dateEnd: 1542984363390,
        time: 493,
        user: 1
      },
      {
        dateBegin: 1542983860390,
        dateEnd: 1542983870390,
        time: 10,
        user: 2
      },
      {
        dateBegin: 1542983460390,
        dateEnd: 1542983860390,
        time: 400,
        user: 2
      },
      {
        dateBegin: 1542983360390,
        dateEnd: 1542983460390,
        time: 100,
        user: 1,
        dealine: 15
      }
    ]
  },
  user: {
    id: 1,
    name: 'Sergey Startsev',
    role: 'admin',
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  users: {
    '1': {
      id: 1,
      name: 'Sergey Startsev',
      role: 'admin',
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg'
    },
    '2': {
      id: 2,
      name: 'Pavel Averkiev',
      role: 'member',
      avatar: 'https://randomuser.me/api/portraits/men/92.jpg'
    },
    '3': {
      id: 3,
      name: 'Ivan Petrov',
      role: 'member',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg'
    }
  },
  timerId: null,
  currentTask: null
};

export default initialState;
