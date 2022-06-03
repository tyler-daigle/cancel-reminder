// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCskGz899e_SWKffSvrnnZSXdywUYcbKqU",
  authDomain: "cancel-reminder.firebaseapp.com",
  projectId: "cancel-reminder",
  storageBucket: "cancel-reminder.appspot.com",
  messagingSenderId: "997103952005",
  appId: "1:997103952005:web:6df2164aefd5ca709fc9ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getUserSubs(userId) {
  const subsCollection = collection(db, "subscriptions");
  const subsSnapshot = await getDocs(subsCollection);
  const subList = subsSnapshot.docs.map((doc) => doc.data());
  return subList;
}
