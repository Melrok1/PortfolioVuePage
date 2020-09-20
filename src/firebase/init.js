import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/storage'; 
import 'firebase/firestore';


// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage'; 
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD17EVdQ21I47jKyfpGgmnQq3wmz_stTc8",
  authDomain: "portfolio-eb9b3.firebaseapp.com",
  databaseURL: "https://portfolio-eb9b3.firebaseio.com",
  projectId: "portfolio-eb9b3",
  storageBucket: "portfolio-eb9b3.appspot.com",
  messagingSenderId: "1020948179106",
  appId: "1:1020948179106:web:69cfd5b7bec94aa5758ffb",
  measurementId: "G-81TFXRGZZC"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth()

export {fb, db, auth};

