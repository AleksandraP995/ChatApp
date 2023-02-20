
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBfr2vCmJDJZAXC-a4Y-0qtentVD0A1WUQ",
    authDomain: "chatapp-ee8b5.firebaseapp.com",
    projectId: "chatapp-ee8b5",
    storageBucket: "chatapp-ee8b5.appspot.com",
    messagingSenderId: "708012899172",
    appId: "1:708012899172:web:5a4b7d5af4bf7912b79871",
    measurementId: "G-2GBL4LW6C4"
  }).auth();

  