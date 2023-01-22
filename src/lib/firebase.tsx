import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgarC4Sl8IYieLehNqUzxCvujHlSwB_AU",
  authDomain: "social-circle-project.firebaseapp.com",
  projectId: "social-circle-project",
  storageBucket: "social-circle-project.appspot.com",
  messagingSenderId: "277027742760",
  appId: "1:277027742760:web:640f5fc7032dbe61a2811d",
  measurementId: "G-18968J62BT"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {auth, db}