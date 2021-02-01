/** @format */
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHYJvPKpatUI-A9dgd1akTXAxKp7cA7ys",
  authDomain: "eleopard-3abf3.firebaseapp.com",
  projectId: "eleopard-3abf3",
  storageBucket: "eleopard-3abf3.appspot.com",
  messagingSenderId: "496335046674",
  appId: "1:496335046674:web:acef42f2fb7e571eb930cb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
