// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQmxuswSbx6n-yHvteElTKQ7-Vp2w1gH0",
  authDomain: "octoworld-7ab1f.firebaseapp.com",
  projectId: "octoworld-7ab1f",
  storageBucket: "octoworld-7ab1f.appspot.com",
  messagingSenderId: "505094090465",
  appId: "1:505094090465:web:1b30f12c832a334e5511a0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};