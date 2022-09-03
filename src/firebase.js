import  firebase from "firebase";
const firebaseConfig = {
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   apiKey: "AIzaSyCCFPR1x6-MvR5WBVCXfO_JpEyz1EjKY04",
   authDomain: "netflix-clone-e0e30.firebaseapp.com",
   projectId: "netflix-clone-e0e30",
   storageBucket: "netflix-clone-e0e30.appspot.com",
   messagingSenderId: "857558689666",
   appId: "1:857558689666:web:368d1b7b04c618851e519b",
   measurementId: "G-VVXVC4WKPM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth }