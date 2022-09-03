import  firebase from "firebase";
const firebaseConfig = {
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export { auth }
