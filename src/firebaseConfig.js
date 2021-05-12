import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBIIfeSpGibfPpDsklGBEUpAoFKqihtuNA",
    authDomain: "todo-app-ac5c6.firebaseapp.com",
    projectId: "todo-app-ac5c6",
    storageBucket: "todo-app-ac5c6.appspot.com",
    messagingSenderId: "1062362004940",
    appId: "1:1062362004940:web:6ab121049af24f856e7169",
    measurementId: "G-KCCE15WDZY"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()