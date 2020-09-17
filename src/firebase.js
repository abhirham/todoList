import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBG8KTsbQG2QggyJT-dWDY2G2kdlE7ONN8",
    authDomain: "todolist-3ba9e.firebaseapp.com",
    databaseURL: "https://todolist-3ba9e.firebaseio.com",
    projectId: "todolist-3ba9e",
    storageBucket: "todolist-3ba9e.appspot.com",
    messagingSenderId: "1039832104996",
    appId: "1:1039832104996:web:d7dad1ab2635a558a518b1"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

