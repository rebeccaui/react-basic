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

// This function takes the user we get from Authentication
// and stores the info in our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
    // console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;