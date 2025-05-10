import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selected, setSelected] = useState([]);          
  const [priceRange, setPriceRange] = useState([0, 200]); 

  return (
    <CategoryContext.Provider
      value={{ selected, setSelected, priceRange, setPriceRange }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategory = () => useContext(CategoryContext);
