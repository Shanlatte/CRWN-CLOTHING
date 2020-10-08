import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBWfTpYhW3Vd80USrhVnEvjUO1VE5_hBMI",
    authDomain: "crwn-db-aba2b.firebaseapp.com",
    databaseURL: "https://crwn-db-aba2b.firebaseio.com",
    projectId: "crwn-db-aba2b",
    storageBucket: "crwn-db-aba2b.appspot.com",
    messagingSenderId: "38809562876",
    appId: "1:38809562876:web:8a5cbd4c07c5e2aa50f179"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (err) {
            console.log('error creating user ', err.message);
        }
    }
    console.log(userRef)
    return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;