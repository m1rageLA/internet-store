// src/useCart.js
import { useContext } from "react";
import { CartContext } from "./context/CartContext"; // убедись, что путь и название совпадают

const useCart = () => {
  return useContext(CartContext); // должен возвращать объект { addToCart, ... }
};

export default useCart;
