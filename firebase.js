// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF41xYI2d5t5XK96sphcf_r2kSo_CQ-HU",
  authDomain: "octoworld-two.firebaseapp.com",
  projectId: "octoworld-two",
  storageBucket: "octoworld-two.appspot.com",
  messagingSenderId: "429108022496",
  appId: "1:429108022496:web:d2d7cb4a0d29aa6bbb1485"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};