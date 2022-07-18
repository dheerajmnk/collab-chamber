import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCYuDNIj2z4gjIobPP8Sb5qtex-G9qCvUE",
    authDomain: "collabchamber.firebaseapp.com",
    projectId: "collabchamber",
    storageBucket: "collabchamber.appspot.com",
    messagingSenderId: "35536228301",
    appId: "1:35536228301:web:2b4e9f19db2c20c438fe84"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize firebase services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp object
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }