// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC78k3jee0ws-QA4uR6k8NrIOc-8CaWIg",
  authDomain: "octoworld-721dd.firebaseapp.com",
  projectId: "octoworld-721dd",
  storageBucket: "octoworld-721dd.appspot.com",
  messagingSenderId: "742888178664",
  appId: "1:742888178664:web:fc75926a9244732ee21a5d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export {db, storage};