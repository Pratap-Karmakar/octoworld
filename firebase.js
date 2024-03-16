// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-zINyHBinP7l9uGdbEFZOP_MHM2xHdug",
  authDomain: "octoworld-96ade.firebaseapp.com",
  projectId: "octoworld-96ade",
  storageBucket: "octoworld-96ade.appspot.com",
  messagingSenderId: "527261013437",
  appId: "1:527261013437:web:1b5d9a74b482f1f1c96ed4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};