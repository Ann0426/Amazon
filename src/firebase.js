import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBjfgYBZs8_F5Z3QT-jVwEqBY7SGQ-TEXI",
    authDomain: "fir-8bfcb.firebaseapp.com",
    projectId: "fir-8bfcb",
    storageBucket: "fir-8bfcb.appspot.com",
    messagingSenderId: "704165111061",
    appId: "1:704165111061:web:ebedc45bf4afda76ee351c",
    measurementId: "G-MHP2FG8Z0F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };