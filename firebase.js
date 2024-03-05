// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC85MUlo4Xm1kAA0DgY8CyYS-Q_Tll26VI",
  authDomain: "octoworldmain.firebaseapp.com",
  projectId: "octoworldmain",
  storageBucket: "octoworldmain.appspot.com",
  messagingSenderId: "578038323905",
  appId: "1:578038323905:web:0c8f4b5eeafa4336f65240"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};