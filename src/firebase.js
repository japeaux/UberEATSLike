import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBko39PLctUaeLwi8cY5rBUnUeJ7vGqruQ",
    authDomain: "ubereatslike-9f838.firebaseapp.com",
    projectId: "ubereatslike-9f838",
    storageBucket: "ubereatslike-9f838.appspot.com",
    messagingSenderId: "811926196017",
    appId: "1:811926196017:web:96627ea831f4a7d39d6a10"
  };

  
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  export default firebase;