import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMIhPixNq3ILjROM6vpJbSP33AGSDwVys",
  authDomain: "linked-in-cl-46a62.firebaseapp.com",
  projectId: "linked-in-cl-46a62",
  storageBucket: "linked-in-cl-46a62.appspot.com",
  messagingSenderId: "975461772818",
  appId: "1:975461772818:web:77b71f5cb32eaa0d53b2cb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth , db };


