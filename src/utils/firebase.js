import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCILQMEjMuNNPiXzMBb33IX6_LbWjRTkNs",
    authDomain: "smart-perks-ac856.firebaseapp.com",
    projectId: "smart-perks-ac856",
    storageBucket: "smart-perks-ac856.firebasestorage.app",
    messagingSenderId: "404224821502",
    appId: "1:404224821502:web:ef4f5d6a9bc0cd404fbdaf",
    measurementId: "G-NBP2SYR707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
export default app;
