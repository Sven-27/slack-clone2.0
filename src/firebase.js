import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCetudJTSNv2_DGiFRK1KpFE3PYC1gpm3k",
    authDomain: "slack-clone-2-b673f.firebaseapp.com",
    projectId: "slack-clone-2-b673f",
    storageBucket: "slack-clone-2-b673f.appspot.com",
    messagingSenderId: "756752492551",
    appId: "1:756752492551:web:adfb96398667d38547a2a2",
    measurementId: "G-MTKNNHRTNN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;