import firebase from 'firebase/app';
import 'firebase/database';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;

class DB {
  constructor() {
    firebase.initializeApp({
      apiKey: API_KEY,
      databaseURL: DATABASE_URL,
      authDomain: AUTH_DOMAIN
    });

    this.database = firebase.database();
  }

  getTasks(userId) {
    return this.database
      .ref('/tasks/')
      .orderByChild('userCreated')
      .equalTo(userId)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      });
  }
  getTask(taskId) {
    return this.database
      .ref('/tasks/')
      .orderByChild('id')
      .equalTo(taskId)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        const task = Object.keys(data).reduce((acc, key) => {
          return { ...acc, ...data[key] };
        }, {});

        const dataUser = this.getUser(task.userCreated).then(response => response);

        console.log('dataUser: ', dataUser);

        return data;
      });
  }

  getUsers() {
    return this.database
      .ref('/users/')
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      });
  }
  getUser(userId) {
    return this.database
      .ref('/users/')
      .orderByChild('id')
      .equalTo(userId)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      });
  }

  getCurrentUser() {
    // const user = this.database.currentUser;
    // console.log('user: ', user);
    // return {
    //   id: user.uid,
    //   name: user.displayName,
    //   email: user.email,
    //   role: '',
    //   avatar: user.photoURL
    // };

    return {
      id: 1,
      name: 'Sergey Startsev',
      role: 'admin',
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg'
    };
  }
}

export default new DB();
