// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsk0I1QkKVovch_kHfqdZAFMDM3yf3PTg",
  authDomain: "miniblog-69ecc.firebaseapp.com",
  projectId: "miniblog-69ecc",
  storageBucket: "miniblog-69ecc.appspot.com",
  messagingSenderId: "482591752235",
  appId: "1:482591752235:web:b5339de8d769e6831eaa6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};