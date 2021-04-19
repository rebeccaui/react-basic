import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAVLVPz-ZLov4ZY5ahkGk1DXkLh3HUixHM",
    authDomain: "react-store-db-b2d7e.firebaseapp.com",
    projectId: "react-store-db-b2d7e",
    storageBucket: "react-store-db-b2d7e.appspot.com",
    messagingSenderId: "1075983054153",
    appId: "1:1075983054153:web:f6c426994b759278c05698",
    measurementId: "G-VHJJ7YCZBC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;