import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAoBpAzSx-9V8rjli0ZXZBbmvoj5SjkcSU",
    authDomain: "react-expensify-55a22.firebaseapp.com",
    projectId: "react-expensify-55a22",
    storageBucket: "react-expensify-55a22.appspot.com",
    messagingSenderId: "443699843242",
    appId: "1:443699843242:web:5c479038c116cc8748c0d3",
    measurementId: "G-NMF8LVZWD4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};