// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEY2LJKaMTv_eDWVTMp3JcOwvW7CQHPrA",
  authDomain: "octoworld2-727b2.firebaseapp.com",
  projectId: "octoworld2-727b2",
  storageBucket: "octoworld2-727b2.appspot.com",
  messagingSenderId: "186440366339",
  appId: "1:186440366339:web:2b6f1ba9a941c697a05136"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};