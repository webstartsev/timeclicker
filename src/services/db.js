import firebase from 'firebase/app';
import 'firebase/database';

class DB {
  constructor() {
    // WARNING: apiKey необходимо перенести на сервер
    firebase.initializeApp({
      apiKey: 'AIzaSyBoKb142eOmh_26bJKxbVx1Usd3-eCoWRU',
      databaseURL: 'https://timeclickerone.firebaseio.com/',
      authDomain: 'timeclickerone.firebaseapp.com'
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
        console.log(snapshot.val());
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
