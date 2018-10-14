import firebase from 'firebase';
import Rebase from 're-base';

var firebaseApp = firebase.initializeApp

const fbase = Rebase.createClass(firebaseApp.database());
// firebase.initializeApp(config);