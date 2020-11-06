import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAByjF2QLrB7ADXqdSm63-X-zvJxj7YCCA",
  authDomain: "twitter-clone-cc7e5.firebaseapp.com",
  databaseURL: "https://twitter-clone-cc7e5.firebaseio.com",
  projectId: "twitter-clone-cc7e5",
  storageBucket: "twitter-clone-cc7e5.appspot.com",
  messagingSenderId: "5585458092",
  appId: "1:5585458092:web:ff15d25ff29383685a6009"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;