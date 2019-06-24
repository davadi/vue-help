import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDrNzHTuU1w0hmAXbAAO9buBLQQJpzEYGc",
    authDomain: "chadtest-ec968.firebaseapp.com",
    databaseURL: "https://chadtest-ec968.firebaseio.com",
    projectId: "chadtest-ec968",
    storageBucket: "chadtest-ec968.appspot.com",
    messagingSenderId: "276183425086",
    appId: "1:276183425086:web:bbeaf2f03e84fc04"
  };
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
firebaseapp.firestore().settings({});
export default firebaseapp.firestore()
