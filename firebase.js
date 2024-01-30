// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMcoMlQL4GrzCgYxADEsp5UnUNk1UM30",
  authDomain: "octoworld1.firebaseapp.com",
  projectId: "octoworld1",
  storageBucket: "octoworld1.appspot.com",
  messagingSenderId: "193876838717",
  appId: "1:193876838717:web:2fbdba5f80350d06425d54"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};