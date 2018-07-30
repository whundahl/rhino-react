import firebase from 'firebase'
var config = {
  apiKey: '',
  authDomain: 'rhinoapp-296c0.firebaseapp.com',
  databaseURL: 'https://rhinoapp-296c0.firebaseio.com',
  projectId: 'rhinoapp-296c0',
  storageBucket: 'rhinoapp-296c0.appspot.com',
  messagingSenderId: '70249226156',
}
var fire = firebase.initializeApp(config)
export default fire
