import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMDnjqVH2TNPgE_2ZOydeQXdHJx1VL3U",
  authDomain: "supergigs-81399.firebaseapp.com",
  projectId: "supergigs-81399",
  storageBucket: "supergigs-81399.appspot.com",
  messagingSenderId: "225273292474",
  appId: "1:225273292474:web:f0ef6a72663f0f8b474483",
  measurementId: "G-JCM01GLWVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Sign in function
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign out function
export const signOutUser = () => {
  return signOut(auth);
};

// Register user function
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Database functions
export const writeUserData = (userId, name, email) => {
  return set(ref(database, 'users/' + userId), {
    username: name,
    email: email
  });
};

export const readUserData = (userId) => {
  return get(ref(database, 'users/' + userId));
};

export { auth, database };