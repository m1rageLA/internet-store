// hooks/useProducts.ts
import {
  collection, onSnapshot, addDoc,
  updateDoc, deleteDoc, doc, getDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // live-подписка на коллекцию
    const unsubscribe = onSnapshot(collection(db, 'products'), snap => {
      setProducts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsubscribe;          // отписка при размонтировании
  }, []);

  const createProduct  = data      => addDoc(collection(db, 'products'), data);
  const updateProduct  = (id, d)   => updateDoc(doc(db, 'products', id), d);
  const deleteProduct  = id        => deleteDoc(doc(db, 'products', id));
  const getProduct     = async id  => {
    const snap = await getDoc(doc(db, 'products', id)); // ⚠️ был неправильный путь
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  };

  return { products, createProduct, updateProduct, deleteProduct, getProduct };
}
