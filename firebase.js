// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtrnGar221VUEc612G5n8Nc6Bflyg5Gc",
  authDomain: "notes-app-2f851.firebaseapp.com",
  projectId: "notes-app-2f851",
  storageBucket: "notes-app-2f851.appspot.com",
  messagingSenderId: "184132079763",
  appId: "1:184132079763:web:f37dab48b7945b3a367d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// this is a database instance
export const db = getFirestore(app)
// this the collection created
export const notesCollection = collection(db, 'notes')
