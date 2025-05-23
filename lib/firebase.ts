// firebase.ts (root folder)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZPzGHN-rEn5rtoZ6mPZTzqNoeBiFc0wI",
  authDomain: "gatechat-ac99e.firebaseapp.com",
  projectId: "gatechat-ac99e",
  storageBucket: "gatechat-ac99e.firebasestorage.app",
  messagingSenderId: "767439247579",
  appId: "1:767439247579:web:0bc4a81f20bec1380954fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
