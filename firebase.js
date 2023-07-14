// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsXD4p2_Ib6io_GrKpWJD5g3d6V4l5lQQ",
  authDomain: "octoworld-67c00.firebaseapp.com",
  projectId: "octoworld-67c00",
  storageBucket: "octoworld-67c00.appspot.com",
  messagingSenderId: "351869143192",
  appId: "1:351869143192:web:2c60bdeec650fe32d268ed"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};