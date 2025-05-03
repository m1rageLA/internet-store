import { useState, useEffect } from "react";
import {
    collection,
    getDoc,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
} from "firebase/firestore";

export function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "products"),
            snapshot => {
                setProducts(
                    snapshot.docs.map(d => ({
                        id: d.id,
                        ...d.data()
                    }))
                );
            }

        )
        return unsubscribe;
    }, [])

    const createProduct = async data => {
        await addDoc(collection(db, "products"), data);
    }

    const getProduct = async (product) => {
        const snap = await getDoc(collection(db, products, id));
        return snap.exists() ? { id: snap.id, ...snap.data() } : null;
    };

    const updateProduct = async (id, data) => {
        updateDoc(doc(db, "products", id), data);
    };

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, "products", id));
    };

    return {
        products,
        createProduct,
        getProduct,
        updateProduct,
        deleteProduct,
    }
}