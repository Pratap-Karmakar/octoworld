// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGsuzq47PrFj9F_a72XYoE40wcvfb43Vw",
  authDomain: "octoworld-three.firebaseapp.com",
  projectId: "octoworld-three",
  storageBucket: "octoworld-three.appspot.com",
  messagingSenderId: "174590678213",
  appId: "1:174590678213:web:c9aca8a68a6a9c86f2ccac"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};