import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCaWXRwNyc3qDVfxXhWIUhAzuYJgZul3lE",
  authDomain: "firegram-71058.firebaseapp.com",
  databaseURL: "https://firegram-71058.firebaseio.com",
  projectId: "firegram-71058",
  storageBucket: "firegram-71058.appspot.com",
  messagingSenderId: "618343263846",
  appId: "1:618343263846:web:f66f184f887dd469d687a7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirebase = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirebase, projectStorage, timeStamp };
