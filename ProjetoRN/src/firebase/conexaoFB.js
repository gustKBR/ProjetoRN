import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJoFkb1gGwu2I58DqdWJDgz3T32NTCccQ",
    authDomain: "projetorn-fb-cdb3c.firebaseapp.com",
    projectId: "projetorn-fb-cdb3c",
    storageBucket: "projetorn-fb-cdb3c.appspot.com",
    messagingSenderId: "655417010685",
    appId: "1:655417010685:web:a5310558ce25c183f31194"
  };
  var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();