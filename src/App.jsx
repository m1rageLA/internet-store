import React from 'react';
import ProductGrid from './components/ProductGrid';
import './App.css'

function App() {
  const products = [
    {
      price: 99.99,
      title: 'Słuchawki',
      description: 'Bezprzewodowe i wygodne.',
      category: 'Audio',
      image: '',
    },
    {
      price: 149.99,
      title: 'Myszka gamingowa',
      description: 'Szybka i precyzyjna.',
      category: 'Akcesoria',
      image: '',
    },
    {
      price: 59.99,
      title: 'Kubek termiczny',
      description: 'Idealny do kawy na wynos.',
      category: 'Dom',
      image: '',
    },
  ];

  return <ProductGrid products={products} />;
}

export default App
