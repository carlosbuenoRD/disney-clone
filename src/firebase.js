import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBO1gFjHJlw9sDhnHfPrvUAIJd46iPyXPo",
    authDomain: "disney-clone-2fe1a.firebaseapp.com",
    projectId: "disney-clone-2fe1a",
    storageBucket: "disney-clone-2fe1a.appspot.com",
    messagingSenderId: "771576639676",
    appId: "1:771576639676:web:f41a273ad7356fc16220b9",
    measurementId: "G-5JCJC3Y2MP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db