import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBxlAcWE1lGh4UX4Nhib_nWxNK_WVoSIyQ",
  authDomain: "fireblogs-98780.firebaseapp.com",
  projectId: "fireblogs-98780",
  storageBucket: "fireblogs-98780.appspot.com",
  messagingSenderId: "709773714776",
  appId: "1:709773714776:web:5f04b89476f29db4bf712d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();