import firebase from 'firebase/app';
import 'firebase/database';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;

class DB {
  constructor() {
    // WARNING: apiKey необходимо перенести на сервер
    firebase.initializeApp({
      apiKey: API_KEY,
      databaseURL: DATABASE_URL,
      authDomain: AUTH_DOMAIN
    });

    this.database = firebase.database();
  }

  getMyTasks(userId = 1) {
    return this.database
      .ref('/tasks/')
      .orderByChild('userCreated')
      .equalTo(userId)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      });
  }

  getUsers() {
    return this.database
      .ref('/users/')
      .once('value')
      .then(snapshot => {
        // console.log('snapshot.val(): ', snapshot.val());
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
