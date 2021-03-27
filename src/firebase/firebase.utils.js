// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyB7eKgxDDpRscYvs3bxX1TmsEubtW1h5r4',
  authDomain: 'crossbow-60071.firebaseapp.com',
  projectId: 'crossbow-60071',
  storageBucket: 'crossbow-60071.appspot.com',
  messagingSenderId: '967178290689',
  appId: '1:967178290689:web:ecfd8d16a45959e8032200',
  measurementId: 'G-R0WKWSK5X5'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

var provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;