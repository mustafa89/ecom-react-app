// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7eKgxDDpRscYvs3bxX1TmsEubtW1h5r4",
  authDomain: "crossbow-60071.firebaseapp.com",
  projectId: "crossbow-60071",
  storageBucket: "crossbow-60071.appspot.com",
  messagingSenderId: "967178290689",
  appId: "1:967178290689:web:ecfd8d16a45959e8032200",
  measurementId: "G-R0WKWSK5X5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; //if no user then exit
  const userRef = firestore.doc(`users/${userAuth.uid}`) //get user with this userid
  const snapShot = await userRef.get()  //return metadata of the user. If it exists or not and some other stuff
  if(!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user:', error.message)
    }
  } return userRef
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

var provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase;