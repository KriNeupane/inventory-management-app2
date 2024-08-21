import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBYq89peqlYkAesWknoy0tjI9Vif60uMlw",
    authDomain: "pantry-tracker-84c4a.firebaseapp.com",
    projectId: "pantry-tracker-84c4a",
    storageBucket: "pantry-tracker-84c4a.appspot.com",
    messagingSenderId: "950799417471",
    appId: "1:950799417471:web:52c888e52a70bdd3837f4a",
    measurementId: "G-9C47N1QWZ6"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };