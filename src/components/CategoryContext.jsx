import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext); // function for Categories component to use for access to global variable

export const CategoryProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  // toggle category button
  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <CategoryContext.Provider value={{ selected, toggleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};