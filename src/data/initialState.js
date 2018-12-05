const initialState = {
  tasks: {},
  taskHistory: {},
  // auth: {
  //   user: null
  // },
  auth: {
    user: {
      id: 1,
      name: 'Sergey Startsev',
      role: 'admin',
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg'
    }
  },
  users: {},
  timerId: null,
  currentTask: null
};

export default initialState;
