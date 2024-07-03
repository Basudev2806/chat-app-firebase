// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8Rh_wQhuBTWXuOWA7DRjXu0N97q6goOY",
    authDomain: "my-projects-3be85.firebaseapp.com",
    projectId: "my-projects-3be85",
    storageBucket: "my-projects-3be85.appspot.com",
    messagingSenderId: "484048378783",
    appId: "1:484048378783:web:6841a7d5053def42a6fbaa",
    measurementId: "G-HT9CW6CTY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;