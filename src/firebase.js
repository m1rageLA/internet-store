// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import products from "./DATA.json"; // 👈 импортируем JSON
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHrSa1uxOtgmmlLpQkgkpkTzMmfU3x6Bs",
  authDomain: "internet-store-d7a86.firebaseapp.com",
  projectId: "internet-store-d7a86",
  storageBucket: "internet-store-d7a86.appspot.com", // ❗ исправлен .com
  messagingSenderId: "74356785591",
  appId: "1:74356785591:web:ce88ba2e7f795668496832"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Загрузка товаров только если коллекция пуста
async function uploadProductsOnce() {
  const colRef = collection(db, "products");
  const snapshot = await getDocs(colRef);

  if (!snapshot.empty) {
    console.log("Products already uploaded. Skipping import.");
    return;
  }

  for (const product of products) {
    try {
      await addDoc(colRef, product);
      console.log("Uploaded:", product.title);
    } catch (err) {
      console.error("Error uploading:", product.title, err);
    }
  }
}

// Вызовем при старте
uploadProductsOnce();
export const auth = getAuth(app);
