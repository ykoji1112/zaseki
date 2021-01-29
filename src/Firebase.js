import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCwYW5QcrAbS_PdN-uwvftTOBF5IOZxt84",
  authDomain: "zaseki-systembase2021.firebaseapp.com",
  databaseURL: "https://zaseki-systembase2021-default-rtdb.firebaseio.com",
  projectId: "zaseki-systembase2021",
  storageBucket: "zaseki-systembase2021.appspot.com",
  messagingSenderId: "577992709722",
  appId: "1:577992709722:web:c6729bd5ea13c5422aaa63",
  measurementId: "G-WZT46L69VJ"
};

firebase.initializeApp(firebaseConfig);

export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export default firebase;
