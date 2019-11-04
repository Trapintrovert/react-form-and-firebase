import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVrLNTm6_yGhgc1ndgbGhX3pzncW8BTvM",
    authDomain: "test-db-7af4a.firebaseapp.com",
    databaseURL: "https://test-db-7af4a.firebaseio.com",
    projectId: "test-db-7af4a",
    storageBucket: "test-db-7af4a.appspot.com",
    messagingSenderId: "542766907408",
    appId: "1:542766907408:web:6133efdf4406ece5410a95"

}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;