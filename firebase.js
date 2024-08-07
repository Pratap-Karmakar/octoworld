// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhJtpTVa8AVFJx0QRERHQ-WaqR-QFNMI",
  authDomain: "octoworld3.firebaseapp.com",
  projectId: "octoworld3",
  storageBucket: "octoworld3.appspot.com",
  messagingSenderId: "1026272290544",
  appId: "1:1026272290544:web:e7377e5d8adfa89c9cc435"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};