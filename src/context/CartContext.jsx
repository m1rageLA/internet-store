import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    setProducts(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], amount: updated[idx].amount + 1 };
        return updated;
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  // --- НОВАЯ ФУНКЦИЯ: removeFromCart ---
  const removeFromCart = (productId) => {
    setProducts(prev => {
      const idx = prev.findIndex(p => p.id === productId);
      if (idx === -1) return prev;              // нет такого — ничего не делаем
      const existing = prev[idx];
      if (existing.amount > 1) {
        // уменьшаем количество
        return prev.map(p =>
          p.id === productId
            ? { ...p, amount: p.amount - 1 }
            : p
        );
      }
      // если amount === 1 — удаляем товар из массива
      return prev.filter(p => p.id !== productId);
    });
  };

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
