import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxKFSoB7F-BZnyPui-PT9H_AQFNa1v1kE',
  authDomain: 'twitter-clone-d3782.firebaseapp.com',
  projectId: 'twitter-clone-d3782',
  storageBucket: 'twitter-clone-d3782.appspot.com',
  messagingSenderId: '493556111258',
  appId: '1:493556111258:web:58338d90558d188144cc23',
  measurementId: 'G-QXR2EK10D0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
