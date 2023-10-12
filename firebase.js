// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhm-R7cJ5Yd9o53MquNKO8VVkASw1NRLI",
  authDomain: "octoworld-one.firebaseapp.com",
  projectId: "octoworld-one",
  storageBucket: "octoworld-one.appspot.com",
  messagingSenderId: "1008679109974",
  appId: "1:1008679109974:web:789b9fa2c23aad2eb242f7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};