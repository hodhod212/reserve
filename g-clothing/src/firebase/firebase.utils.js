import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  const config = {
    apiKey: "AIzaSyCUVaWMSeA3iWD36WALYWRcOgFrfQL0P5A",
    authDomain: "react-212.firebaseapp.com",
    databaseURL: "https://react-212.firebaseio.com",
    projectId: "react-212",
    storageBucket: "react-212.appspot.com",
    messagingSenderId: "538684679935",
    appId: "1:538684679935:web:c683ddacdc9c709ae90eca",
    measurementId: "G-QD8XEMKJEH"
  };
  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
