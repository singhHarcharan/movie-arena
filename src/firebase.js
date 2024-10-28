// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_Uc3DW5JgWuVU-eGOEuS-P7UKk7y9OcY",
    authDomain: "netflix-clone-react-415b3.firebaseapp.com",
    projectId: "netflix-clone-react-415b3",
    storageBucket: "netflix-clone-react-415b3.appspot.com",
    messagingSenderId: "977786020490",
    appId: "1:977786020490:web:388f5ece5a086a08a68373"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();   // dataBase of authorized users.
  const auth = firebase.auth();

  export { auth }     // Explicitely Export or Local export
  export default db;  // Default Export or Global export