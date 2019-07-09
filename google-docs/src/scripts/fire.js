import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDSShwdLKNb4MnXOfr1ICTZQjNgApgeULc",
  authDomain: "live-editor-639bd.firebaseapp.com",
  databaseURL: "https://live-editor-639bd.firebaseio.com",
  projectId: "live-editor-639bd",
  storageBucket: "live-editor-639bd.appspot.com",
  messagingSenderId: "163272016909",
  appId: "1:163272016909:web:0f1ed402cecbf1fe"

  };


  var fire = firebase.initializeApp(config)
  export default fire;