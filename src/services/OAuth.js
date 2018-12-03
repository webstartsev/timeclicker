import firebase from 'firebase/app';
import 'firebase/auth';

class AuthService {
  singInGitHub() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBoKb142eOmh_26bJKxbVx1Usd3-eCoWRU', // Auth / General Use
      authDomain: 'timeclickerone.firebaseapp.com' // Auth with popup/redirect
    });

    const provider = new firebase.auth.GithubAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const token = result.credential.accessToken;

        // The signed-in user info.
        return result.user;
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        console.log('errorCode: ', errorCode);
        const errorMessage = error.message;
        console.log('errorMessage: ', errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log('email: ', email);
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log('credential: ', credential);
        // ...
      });
  }
}

export default new AuthService();
