import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqfiWjv99YLjbbAAqOJroGllasf16Hp60",
  authDomain: "todo-61399.firebaseapp.com",
  projectId: "todo-61399",
  storageBucket: "todo-61399.appspot.com",
  messagingSenderId: "237979682138",
  appId: "1:237979682138:web:3193ab17253240b8f8df63",
  measurementId: "G-GEG50D988Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
export { db, auth, provider };
