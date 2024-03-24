// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";


import { getFirestore } from "firebase/firestore";
import {getStorage}  from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlj2W0tSKl2ZV99DztWjiI7KumMRbz0-4",
  authDomain: "dashboard-72945.firebaseapp.com",
  projectId: "dashboard-72945",
  storageBucket: "dashboard-72945.appspot.com",
  messagingSenderId: "78692126510",
  appId: "1:78692126510:web:ccb9f9920353051ecf74bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()

export const storage = getStorage(app)
 