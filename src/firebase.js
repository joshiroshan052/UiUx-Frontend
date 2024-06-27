import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8fPw8jsCbH6Pvs9KinoTAu2Ld0S9-SP0",
  authDomain: "gamerconenct.firebaseapp.com",
  projectId: "gamerconenct",
  storageBucket: "gamerconenct.appspot.com",
  messagingSenderId: "505664325273",
  appId: "1:505664325273:web:dd6fe54301b2855d9f9a08",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);