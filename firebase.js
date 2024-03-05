// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfoxSHIsEjEvn-sR1I11KFC8BNyxkm1wU",
  authDomain: "octoworld2.firebaseapp.com",
  projectId: "octoworld2",
  storageBucket: "octoworld2.appspot.com",
  messagingSenderId: "992569816481",
  appId: "1:992569816481:web:acc6582f28d086ad8ec7e0"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};