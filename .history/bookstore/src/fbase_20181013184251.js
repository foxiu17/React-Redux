import firebase from 'firebase';
import Rebase from 're-base';

var firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAM4_QxIrS-qp87fdLajvg_skeX2uZDTHI",
  authDomain: "bookstore-5adca.firebaseapp.com",
  databaseURL: "https://bookstore-5adca.firebaseio.com",
  projectId: "bookstore-5adca",
  storageBucket: "bookstore-5adca.appspot.com",
  messagingSenderId: "164263239709"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
// firebase.initializeApp(config);