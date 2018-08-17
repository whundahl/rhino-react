import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyC0VSTP9DDvWagQq6uYkiBFr46CAAx6_cg',
  authDomain: 'rhinoapp-296c0.firebaseapp.com',
  databaseURL: 'https://rhinoapp-296c0.firebaseio.com',
  projectId: 'rhinoapp-296c0',
  storageBucket: 'rhinoapp-296c0.appspot.com',
  messagingSenderId: '70249226156',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log('current user', firebaseUser)
  }
})

export { db, auth, googleProvider }
