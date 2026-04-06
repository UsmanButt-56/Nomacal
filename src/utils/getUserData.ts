// utils/getUserData.ts
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};