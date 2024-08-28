// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARn618RVue8ult02y5w5HBDppwtVHvvJk",
  authDomain: "assettracker-a4281.firebaseapp.com",
  databaseURL: "https://assettracker-a4281-default-rtdb.firebaseio.com",
  projectId: "assettracker-a4281",
  storageBucket: "assettracker-a4281.appspot.com",
  messagingSenderId: "479612506079",
  appId: "1:479612506079:web:8be47135aafad247b97e6a",
  measurementId: "G-W5NZBHY0DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, 'users');
const analytics = getAnalytics(app);
export { db };
export default firebaseConfig;
