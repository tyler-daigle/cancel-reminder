// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const COLLECTION_NAME = "subscriptions";

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
export const database = getFirestore(app);
export const auth = getAuth(app);

// move getUserSubs() to custom hook?
export async function getUserSubs(uid) {
  // get only the subs for the provided uid
  const subsCollection = collection(database, COLLECTION_NAME);
  const subsSnapshot = await getDocs(subsCollection);
  const subList = subsSnapshot.docs.map((doc) => doc.data());
  return subList;
}

export async function addSub(sub) {
  try {
    const doc = await addDoc(collection(database, COLLECTION_NAME), {
      uid: sub.uid,
      name: sub.name,
      price: sub.price,
      startDate: Timestamp.fromDate(sub.startDate),
      isActive: sub.isActive,
      logo: sub.logo,
      billingPeriod: sub.billingPeriod,
      url: sub.url,
    });
    return doc;
  } catch (err) {
    throw new Error(err);
  }
}

export async function logout() {
  await signOut(auth);
}
