import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDS0fQpWWgzoiJRFeLlqQI4C-NH3386Qe8",
    authDomain: "curso-react-sebasfili.firebaseapp.com",
    databaseURL: "https://curso-react-sebasfili.firebaseio.com",
    projectId: "curso-react-sebasfili",
    storageBucket: "curso-react-sebasfili.appspot.com",
    messagingSenderId: "78192019039",
    appId: "1:78192019039:web:0dcc186a946d7a70567dea",
    measurementId: "G-71CW63G9SD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;