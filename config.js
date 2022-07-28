import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBt-cMywQUSIQC4QuvE85skLfVuMf-LqC0",
  authDomain: "eride-fc382.firebaseapp.com",
  projectId: "eride-fc382",
  storageBucket: "eride-fc382.appspot.com",
  messagingSenderId: "724384681367",
  appId: "1:724384681367:web:0b3814dfc7eaec2df148d2",
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
