import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnxzXYFP3Lqqa38TwRf7ZprBkg6U122dc",
  authDomain: "facebook-clone-29702.firebaseapp.com",
  projectId: "facebook-clone-29702",
  storageBucket: "facebook-clone-29702.appspot.com",
  messagingSenderId: "1002676558231",
  appId: "1:1002676558231:web:97c09112860eed44758cd2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
