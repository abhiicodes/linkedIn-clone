// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBnULlOypTuI-cN8RerUTACJvq2PEe4miw",
    authDomain: "linkedin-clone-b5176.firebaseapp.com",
    projectId: "linkedin-clone-b5176",
    storageBucket: "linkedin-clone-b5176.appspot.com",
    messagingSenderId: "748935755771",
    appId: "1:748935755771:web:83bc524545a48bcb337d5e",
    measurementId: "G-VRJJQDH4H2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db,auth}